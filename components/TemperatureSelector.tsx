"use client";

import { tempLevels } from "@/lib/climateProjections";

const styles = {
  blue:   { btn: "border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100",       active: "border-blue-600 bg-blue-600 text-white shadow-md",       dot: "bg-blue-500" },
  orange: { btn: "border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100", active: "border-orange-500 bg-orange-500 text-white shadow-md", dot: "bg-orange-500" },
  red:    { btn: "border-red-200 text-red-700 bg-red-50 hover:bg-red-100",           active: "border-red-600 bg-red-600 text-white shadow-md",         dot: "bg-red-500" },
  darkred:{ btn: "border-red-300 text-red-950 bg-red-50 hover:bg-red-100",           active: "border-red-950 bg-red-950 text-white shadow-md",         dot: "bg-red-950" },
  black:  { btn: "border-slate-300 text-slate-950 bg-slate-100 hover:bg-slate-200",  active: "border-slate-950 bg-slate-950 text-white shadow-md",     dot: "bg-slate-950" }
};

interface Props { selected: number; onChange: (temp: number) => void; }

export default function TemperatureSelector({ selected, onChange }: Props) {
  return (
    <div className="rounded-lg border border-border bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-bold text-slate-800">상승 온도</span>
        <span className="text-xs font-medium text-slate-400">산업화 이전 대비</span>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {tempLevels.map((d) => {
          const s = styles[d.color];
          const isActive = d.temp === selected;
          return (
            <button
              key={d.temp}
              aria-pressed={isActive}
              aria-label={`${d.label} 상승, ${d.level}`}
              onClick={() => onChange(d.temp)}
              className={`flex min-h-[82px] flex-col items-center justify-center rounded-lg border px-2 py-3 text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${isActive ? s.active : s.btn}`}
            >
              <span className={`mb-2 h-2 w-2 rounded-full ${isActive ? "bg-white" : s.dot}`} />
              <span className="text-2xl font-extrabold">{d.label}</span>
              <span className={`mt-1 text-[11px] font-medium ${isActive ? "text-white/85" : "text-slate-500"}`}>
                {d.level}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
