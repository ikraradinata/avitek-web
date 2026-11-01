// Penerima formulir website AVITEK KUKM.
// Tempel di Google Sheet milik asosiasi.avitek@gmail.com lewat Ekstensi > Apps Script.
// Panduan lengkap: docs/07-GOOGLE-SHEET-SETUP.md
// Kode rahasia disimpan di Script Properties, jangan ditulis di file ini.

var TABS = { anggota: 'Anggota', mitra: 'Mitra', hadir: 'Hadir' };
var PATH_LABELS = {
  anggota: 'Pendaftaran anggota',
  mitra: 'Pengajuan kemitraan',
  hadir: 'Konfirmasi kehadiran',
};
var HEADERS = [
  'Waktu', 'Bahasa', 'Nama', 'Institusi', 'Email', 'WhatsApp',
  'Kategori', 'Pesan', 'Persetujuan', 'User agent', 'Hash IP',
];
var HOURLY_LIMITS = { hadir: 30, lainnya: 5 };
var DEFAULT_NOTIFY_EMAIL = 'asosiasi.avitek@gmail.com';

function doPost(e) {
  var lock = LockService.getScriptLock();
  var locked = false;
  try {
    var data = JSON.parse(e.postData.contents);
    var props = PropertiesService.getScriptProperties();
    var secret = props.getProperty('AVITEK_SECRET');
    if (!secret || data.secret !== secret) return respond({ ok: false, error: 'unauthorized' });
    if (!Object.prototype.hasOwnProperty.call(TABS, data.path)) {
      return respond({ ok: false, error: 'bad_request' });
    }

    // Kunci agar kiriman yang bersamaan tidak saling menimpa baris
    lock.waitLock(20000);
    locked = true;
    if (isRateLimited(data.path, data.ipHash)) return respond({ ok: false, error: 'rate_limited' });
    appendSubmission(data);
    lock.releaseLock();
    locked = false;

    // Data sudah aman di Sheet, jadi kegagalan email tidak menggagalkan kiriman
    try {
      notifySecretariat(data, props.getProperty('NOTIFY_EMAIL') || DEFAULT_NOTIFY_EMAIL);
    } catch (mailError) {
      console.error('Email gagal: ' + mailError);
    }
    return respond({ ok: true });
  } catch (error) {
    console.error('Kiriman gagal: ' + error);
    return respond({ ok: false, error: 'server' });
  } finally {
    if (locked) lock.releaseLock();
  }
}

// F-09: batas per jam per IP. Jalur Hadir lebih longgar karena tamu berbagi Wi-Fi lokasi.
function isRateLimited(path, ipHash) {
  var group = path === 'hadir' ? 'hadir' : 'lainnya';
  var hour = Utilities.formatDate(new Date(), 'Asia/Jakarta', 'yyyyMMddHH');
  var key = ['rl', group, ipHash || 'unknown', hour].join(':');
  var cache = CacheService.getScriptCache();
  var count = Number(cache.get(key) || 0);
  if (count >= HOURLY_LIMITS[group]) return true;
  cache.put(key, String(count + 1), 3700);
  return false;
}

function appendSubmission(data) {
  var row = [
    Utilities.formatDate(new Date(), 'Asia/Jakarta', 'yyyy-MM-dd HH:mm:ss'),
    data.locale, data.nama, data.institusi, data.email, data.wa,
    data.kategori, data.pesan, data.consent ? 'Ya' : 'Tidak',
    data.userAgent, data.ipHash,
  ].map(asPlainText);
  getTab(data.path).appendRow(row);
}

// Isian yang diawali = + - @ bisa dijalankan Sheet sebagai rumus, jadi dipaksa menjadi teks
function asPlainText(value) {
  var text = value === undefined || value === null ? '' : String(value);
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

function getTab(path) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var name = TABS[path];
  var sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notifySecretariat(data, to) {
  var body = [
    PATH_LABELS[data.path] + ' baru dari website AVITEK KUKM.',
    '',
    'Bahasa pendaftar: ' + (data.locale === 'en' ? 'English' : 'Indonesia'),
    'Nama: ' + data.nama,
    'Institusi: ' + data.institusi,
    'Email: ' + data.email,
    'WhatsApp: ' + (data.wa || '-'),
    'Kategori: ' + (data.kategori || '-'),
    'Pesan: ' + (data.pesan || '-'),
  ].join('\n');
  MailApp.sendEmail({
    to: to,
    replyTo: data.email,
    subject: '[AVITEK] ' + PATH_LABELS[data.path] + ': ' + data.nama,
    body: body,
  });
}

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// Jalankan sekali dari editor untuk membuat tiga tab dan memberi izin akses
function setup() {
  Object.keys(TABS).forEach(getTab);
}
