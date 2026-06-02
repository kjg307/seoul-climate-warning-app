"use client";

import { useState } from "react";
import { tempLevels } from "@/lib/climateProjections";
import TemperatureSelector from "@/components/TemperatureSelector";
import VideoSlot from "@/components/VideoSlot";
import StatsRow from "@/components/StatsRow";
import ClimateContent from "@/components/ClimateContent";

export default function Home() {
  const [temp, setTemp] = useState(1);
  const tempLevel = tempLevels.find((d) => d.temp === temp)!;
  const riskPercent = Math.round((tempLevel.temp / 9) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-border bg-white/95 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌏</span>
            <span className="font-bold text-slate-800">AI로 보는 서울 기후 위기</span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:block">기상청 · IPCC AR6 · 교육용 시뮬레이션</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-10 space-y-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-20">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                서울 기후 위험 단계
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-slate-950 [word-break:keep-all] sm:text-5xl">
                지구 온도 상승이 서울의 일상을 바꿉니다
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 [word-break:keep-all]">
                {tempLevel.summary}
              </p>
            </div>

            <TemperatureSelector selected={temp} onChange={setTemp} />

            <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-700">누적 위험도</span>
                <span className="font-bold text-slate-900">{riskPercent}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-orange-500 to-slate-950 transition-all duration-300"
                  style={{ width: `${riskPercent}%` }}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                폭염, 열대야, 해수면 상승이 동시에 커지며 도시 기반 시설과 야외 활동의 부담이 빠르게 증가합니다.
              </p>
            </div>
          </div>

          <div key={temp} className="animate-slide-in">
            <VideoSlot tempLevel={tempLevel} />
          </div>
        </section>

        <section className="space-y-6 animate-slide-in">
          <StatsRow tempLevel={tempLevel} />
          <ClimateContent tempLevel={tempLevel} />

          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="text-sm font-bold text-slate-800">도시 열섬 완화</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">그늘, 녹지, 쿨루프, 보행 공간 개선은 폭염 피해를 낮추는 가장 직접적인 도시 대응입니다.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="text-sm font-bold text-slate-800">전력 피크 관리</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">냉방 수요가 몰리는 시간대의 전력 부담을 줄이면 정전 위험과 취약계층 피해를 함께 줄일 수 있습니다.</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <h3 className="text-sm font-bold text-slate-800">침수 대비</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">저지대 배수, 지하 공간 차수, 대피 동선 점검은 극한 강수에 대한 기본 방어선입니다.</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-500">
            수치는 교육용 시나리오로 단순화되어 있으며, 실제 피해 규모는 배출 경로, 적응 정책, 도시 인프라 대응 수준에 따라 달라질 수 있습니다.
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-border bg-white py-8 text-center text-xs text-slate-400">
        <p>데이터 출처: 기상청 · IPCC AR6 보고서 · 국제 기후 연구 자료</p>
        <p className="mt-1">미래는 지금 우리의 행동에 달려 있습니다.</p>
      </footer>
    </div>
  );
}
