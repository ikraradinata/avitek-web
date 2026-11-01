type NodeLabels = {
  coop: string[];
  academia: string[];
  industry: string[];
  government: string[];
  korea: string[];
};

// Posisi dan warna simpul, label diterima dari messages lewat props
const NODES = [
  { key: "coop", cx: 200, cy: 50, fill: "#F97316", color: "#0B1F3A" },
  { key: "academia", cx: 343, cy: 154, fill: "#FFFFFF", color: "#0B1F3A" },
  { key: "industry", cx: 288, cy: 321, fill: "#FFFFFF", color: "#0B1F3A" },
  { key: "government", cx: 112, cy: 321, fill: "#FFFFFF", color: "#0B1F3A" },
  { key: "korea", cx: 57, cy: 154, fill: "#2563EB", color: "#FFFFFF" },
] as const;

export function EcosystemDiagram({
  label,
  nodes,
}: Readonly<{
  label: string;
  nodes: NodeLabels;
}>) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label}>
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="#64748B"
        strokeWidth="2"
        strokeDasharray="4 8"
      />
      <g stroke="#087F8C" strokeWidth="2" opacity=".6">
        {NODES.map(({ key, cx, cy }) => (
          <line key={key} x1="200" y1="200" x2={cx} y2={cy} />
        ))}
      </g>
      <circle cx="200" cy="200" r="62" fill="#0B1F3A" />
      <text
        x="200"
        y="196"
        textAnchor="middle"
        fill="#FFFFFF"
        fontWeight="800"
        fontSize="20"
      >
        AVITEK
      </text>
      <text
        x="200"
        y="218"
        textAnchor="middle"
        fill="#F2B544"
        fontWeight="700"
        fontSize="14"
      >
        KUKM
      </text>
      <g fontWeight="700" fontSize="12.5" textAnchor="middle">
        {NODES.map(({ key, cx, cy, fill, color }) => (
          <g key={key} fill={color}>
            <circle cx={cx} cy={cy} r="42" fill={fill} />
            {nodes[key].map((line, index) => (
              <text
                key={line}
                x={cx}
                y={nodes[key].length === 1 ? cy + 4 : cy - 3 + index * 15}
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
