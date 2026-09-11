// Server-rendered inline SVG line chart. series: [{ label, points: [[x, y], ...], color }]
const W = 720, H = 320, PAD = { t: 16, r: 16, b: 40, l: 44 };

export default function LineChart({ series, yMax = 100, yUnit = '%', caption, ariaLabel }) {
  const xs = series.flatMap((s) => s.points.map((p) => p[0]));
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const iw = W - PAD.l - PAD.r, ih = H - PAD.t - PAD.b;
  const sx = (x) => PAD.l + ((x - x0) / (x1 - x0 || 1)) * iw;
  const sy = (y) => PAD.t + ih - (y / yMax) * ih;
  const xTicks = []; for (let x = Math.ceil(x0 / 10) * 10; x <= x1; x += 10) xTicks.push(x);
  const yTicks = [0, 25, 50, 75, 100].filter((y) => y <= yMax);
  return (
    <figure className="my-4 mb-6">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={ariaLabel || caption}>
        {yTicks.map((y) => (
          <g key={y}>
            <line x1={PAD.l} x2={W - PAD.r} y1={sy(y)} y2={sy(y)} stroke="#e5e5e5" />
            <text x={PAD.l - 8} y={sy(y) + 4} textAnchor="end" fontSize="12" fill="#5a5a5a">{y}{yUnit}</text>
          </g>
        ))}
        {xTicks.map((x) => <text key={x} x={sx(x)} y={H - PAD.b + 20} textAnchor="middle" fontSize="12" fill="#5a5a5a">{x}</text>)}
        {series.map((s) => (
          <polyline key={s.label} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinejoin="round" points={s.points.map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(' ')} />
        ))}
        {series.map((s, i) => {
          const last = s.points[s.points.length - 1];
          return <text key={s.label} x={sx(last[0]) - 4} y={sy(last[1]) + (i === 0 ? -8 : 16)} textAnchor="end" fontSize="12" fontWeight="700" fill={s.color}>{s.label} {last[1]}{yUnit}</text>;
        })}
      </svg>
      {caption && <figcaption className="text-[13px] text-muted mt-1">{caption}</figcaption>}
    </figure>
  );
}
