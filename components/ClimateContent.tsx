import type { Decade } from "@/lib/climateProjections";

const borderColor: Record<Decade["color"], string> = {
  blue:   "border-blue-200 bg-blue-50/50",
  yellow: "border-yellow-200 bg-yellow-50/50",
  orange: "border-orange-200 bg-orange-50/50",
  red:    "border-red-200 bg-red-50/50"
};

const iconColor: Record<Decade["color"], string> = {
  blue:   "text-blue-500",
  yellow: "text-yellow-500",
  orange: "text-orange-500",
  red:    "text-red-500"
};

export default function ClimateContent({ decade }: { decade: Decade }) {
  const border = borderColor[decade.color];
  const icon = iconColor[decade.color];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* 전 세계 기후 현상 */}
      <div className={`rounded-2xl border p-5 ${border}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🌍</span>
          <h3 className="font-bold text-slate-700">전 세계 기후 현상</h3>
        </div>
        <ul className="space-y-3">
          {decade.globalPhenomena.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-0.5 flex-shrink-0 font-bold text-sm ${icon}`}>•</span>
              <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 서울 · 한반도 변화 */}
      <div className={`rounded-2xl border p-5 ${border}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🗼</span>
          <h3 className="font-bold text-slate-700">서울 · 한반도 변화</h3>
        </div>
        <ul className="space-y-3">
          {decade.seoulChanges.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className={`mt-0.5 flex-shrink-0 font-bold text-sm ${icon}`}>•</span>
              <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
