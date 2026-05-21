"use client";

import { decades } from "@/lib/climateProjections";

const styles = {
  blue:   { btn: "border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100",     active: "border-blue-600 bg-blue-600 text-white shadow-lg",     badge: "bg-blue-100 text-blue-700" },
  yellow: { btn: "border-yellow-300 text-yellow-700 bg-yellow-50 hover:bg-yellow-100", active: "border-yellow-500 bg-yellow-500 text-white shadow-lg", badge: "bg-yellow-100 text-yellow-700" },
  orange: { btn: "border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100", active: "border-orange-500 bg-orange-500 text-white shadow-lg", badge: "bg-orange-100 text-orange-700" },
  red:    { btn: "border-red-300 text-red-700 bg-red-50 hover:bg-red-100",         active: "border-red-600 bg-red-600 text-white shadow-lg",         badge: "bg-red-100 text-red-700" }
};

interface Props { selected: number; onChange: (year: number) => void; }

export default function YearSelector({ selected, onChange }: Props) {
  return (
    <div>
      <p className="text-center text-slate-500 text-sm mb-5">
        연도를 선택하면 AI가 그 시점의 서울을 예측합니다
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {decades.map((d) => {
          const s = styles[d.color];
          const isActive = d.year === selected;
          return (
            <button
              key={d.year}
              onClick={() => onChange(d.year)}
              className={`relative flex flex-col items-center px-6 py-4 rounded-xl border-2 font-semibold transition-all duration-200 min-w-[90px] ${isActive ? s.active : s.btn}`}
            >
              <span className="text-2xl font-extrabold">{d.year}</span>
              <span className={`mt-1 text-[11px] px-2 py-0.5 rounded-full font-medium ${isActive ? "bg-white/25 text-white" : s.badge}`}>
                {d.level}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
