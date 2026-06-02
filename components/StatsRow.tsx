import type { TempLevel } from "@/lib/climateProjections";

const items = (d: TempLevel) => [
  { icon: "🌡️", label: "기온 상승",   value: d.label,                  sub: "산업화 이전 대비" },
  { icon: "☀️", label: "폭염 일수",   value: `${d.heatDays}일`,         sub: "최고기온 33도 이상" },
  { icon: "🌙", label: "열대야",      value: `${d.tropicalNights}일`,    sub: "최저기온 25도 이상" },
  { icon: "🌊", label: "해수면 상승", value: `+${d.seaLevel}${d.seaLevelUnit}`, sub: "현재 대비" }
];

export default function StatsRow({ tempLevel }: { tempLevel: TempLevel }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items(tempLevel).map((s) => (
        <div key={s.label} className="rounded-lg border border-border bg-white p-4 text-center shadow-sm">
          <div className="mb-2 text-2xl">{s.icon}</div>
          <div className="text-2xl font-extrabold tracking-normal text-slate-900">{s.value}</div>
          <div className="mt-1 text-xs font-semibold text-slate-600">{s.label}</div>
          <div className="text-xs text-slate-400">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
