import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI로 보는 서울 기후 위기",
  description: "연도를 선택하면 AI가 예측한 미래 서울의 모습을 보여주는 교육용 웹사이트"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
