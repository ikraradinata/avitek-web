// Cek paritas kunci messages/id.json dan messages/en.json.
// Dipanggil lewat "prebuild" di package.json. Gagal (exit 1) bila tidak sinkron.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = ['id', 'en'];

// ratakan objek bersarang menjadi { 'a.b.0.c': 'teks' }
function flatten(node, prefix = '', out = {}) {
  if (node !== null && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
  } else {
    out[prefix] = node;
  }
  return out;
}

const vars = (s) => (typeof s === 'string' ? (s.match(/\{(\w+)\}/g) ?? []).sort().join(',') : '');

const flat = Object.fromEntries(
  LOCALES.map((l) => [l, flatten(JSON.parse(readFileSync(join(root, 'messages', `${l}.json`), 'utf8')))])
);

const errors = [];
const [base, ...others] = LOCALES;
for (const other of others) {
  const a = flat[base], b = flat[other];
  for (const k of Object.keys(a)) if (!(k in b)) errors.push(`Kunci hilang di ${other}.json: ${k}`);
  for (const k of Object.keys(b)) if (!(k in a)) errors.push(`Kunci hilang di ${base}.json: ${k}`);
  for (const k of Object.keys(a)) {
    if (!(k in b)) continue;
    if (a[k] !== '' && b[k] === '') errors.push(`Teks ${other} kosong: ${k}`);
    if (vars(a[k]) !== vars(b[k])) errors.push(`Variabel berbeda di ${k}: ${base}=[${vars(a[k])}] ${other}=[${vars(b[k])}]`);
  }
}

if (errors.length) {
  console.error(`✗ i18n tidak sinkron (${errors.length} masalah):\n  - ` + errors.join('\n  - '));
  process.exit(1);
}
console.log(`✓ i18n sinkron: ${Object.keys(flat[base]).length} kunci × ${LOCALES.length} bahasa`);
