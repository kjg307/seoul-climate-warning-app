import type { TempLevel } from "@/lib/climateProjections";

const items = (d: TempLevel) => [
  { icon: "🌡️", label: "기온 상승",   value: d.label,                  sub: "산업화 이전 대비" },
  { icon: "☀️", label: "폭염 일수",   value: `${d.heatDays}일`,         sub: "최고기온 33도 이상" },
  { icon: "🌙", label: "열대야",      value: `${d.tropicalNights}일`,    sub: "최저기온 25도 이상" },
  { icon: "🌊", label: "해수면 상승", value: `+${d.seaLevel}${d.seaLevelUnit}`, sub: "현재 대비" }
];

export default function StatsRow({ tempLevel }: { tempLevel: TempLevel }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items(tempLevel).map((s) => (
        <div key={s.label} className="bg-surface rounded-xl border border-border p-4 text-center">
          <div className="text-2xl mb-1">{s.icon}</div>
          <div className="text-2xl font-extrabold text-slate-800">{s.value}</div>
          <div className="text-xs font-medium text-slate-600 mt-0.5">{s.label}</div>
          <div className="text-xs text-slate-400">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
