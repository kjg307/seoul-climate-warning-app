"use client";

import { tempLevels } from "@/lib/climateProjections";

const styles = {
  blue:   { btn: "border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100",     active: "border-blue-600 bg-blue-600 text-white shadow-lg",     badge: "bg-blue-100 text-blue-700" },
  orange: { btn: "border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100", active: "border-orange-500 bg-orange-500 text-white shadow-lg", badge: "bg-orange-100 text-orange-700" },
  red:    { btn: "border-red-300 text-red-700 bg-red-50 hover:bg-red-100",         active: "border-red-600 bg-red-600 text-white shadow-lg",         badge: "bg-red-100 text-red-700" },
  darkred:{ btn: "border-red-950 text-red-950 bg-red-50 hover:bg-red-100",         active: "border-red-950 bg-red-950 text-white shadow-lg",         badge: "bg-red-100 text-red-950" },
  black:  { btn: "border-slate-900 text-slate-950 bg-slate-100 hover:bg-slate-200", active: "border-slate-950 bg-slate-950 text-white shadow-lg",    badge: "bg-slate-200 text-slate-950" }
};

interface Props { selected: number; onChange: (temp: number) => void; }

export default function TemperatureSelector({ selected, onChange }: Props) {
  return (
    <div>
      <p className="text-center text-slate-500 text-sm mb-5">
        온도 상승폭을 선택하면 AI가 그 조건의 서울을 예측합니다
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {tempLevels.map((d) => {
          const s = styles[d.color];
          const isActive = d.temp === selected;
          return (
            <button
              key={d.temp}
              onClick={() => onChange(d.temp)}
              className={`relative flex flex-col items-center px-6 py-4 rounded-xl border-2 font-semibold transition-all duration-200 min-w-[90px] ${isActive ? s.active : s.btn}`}
            >
              <span className="text-2xl font-extrabold">{d.label}</span>
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
