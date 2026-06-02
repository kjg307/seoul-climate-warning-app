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

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌏</span>
            <span className="font-bold text-slate-800">AI로 보는 서울 기후 위기</span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:block">교육용 · 기상청 / IPCC AR6</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            지구 온도가 오르면 서울은 어떻게 변할까요?
          </h1>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            온도 상승폭을 선택하면 기후 데이터와 예측 자료를 보여줍니다.
          </p>
        </div>

        <TemperatureSelector selected={temp} onChange={setTemp} />

        <div key={temp} className="space-y-6 animate-slide-in">
          <VideoSlot tempLevel={tempLevel} />
          <StatsRow tempLevel={tempLevel} />
          <ClimateContent tempLevel={tempLevel} />
        </div>
      </main>

      <footer className="mt-16 border-t border-border py-8 text-center text-xs text-slate-400">
        <p>데이터 출처: 기상청 · IPCC AR6 보고서 · 국제 기후 연구 자료</p>
        <p className="mt-1">미래는 지금 우리의 행동에 달려 있습니다.</p>
      </footer>
    </div>
  );
}
