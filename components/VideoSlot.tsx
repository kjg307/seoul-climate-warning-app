"use client";

import { useEffect, useRef, useState } from "react";
import type { Decade } from "@/lib/climateProjections";

const levelColor: Record<Decade["color"], string> = {
  blue:   "text-blue-600 border-blue-200 bg-blue-50",
  yellow: "text-yellow-600 border-yellow-200 bg-yellow-50",
  orange: "text-orange-600 border-orange-200 bg-orange-50",
  red:    "text-red-600 border-red-200 bg-red-50"
};

export default function VideoSlot({ decade }: { decade: Decade }) {
  const [hasVideo, setHasVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = `/videos/${decade.year}.mp4`;

  useEffect(() => {
    setHasVideo(false);
    fetch(src, { method: "HEAD" })
      .then((r) => setHasVideo(r.ok))
      .catch(() => setHasVideo(false));
  }, [src]);

  useEffect(() => {
    if (hasVideo) videoRef.current?.load();
  }, [hasVideo, src]);

  const c = levelColor[decade.color];

  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <span className="font-bold text-slate-700 text-lg">{decade.year}년 서울</span>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${c}`}>
          {decade.level}
        </span>
      </div>

      {hasVideo ? (
        <video ref={videoRef} className="w-full aspect-video object-cover bg-black" controls playsInline>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="aspect-video bg-slate-50 flex flex-col items-center justify-center gap-3 text-center px-6">
          <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${c}`}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M4 8a2 2 0 012-2h9a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-slate-600 mb-1">영상 준비 중</p>
            <p className="text-slate-400 text-sm">
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                public/videos/{decade.year}.mp4
              </code>
              <br />을 추가하면 자동으로 재생됩니다
            </p>
          </div>
        </div>
      )}

      <div className="px-5 py-3 bg-surface border-t border-border">
        <p className="text-slate-600 text-sm">{decade.summary}</p>
      </div>
    </div>
  );
}
