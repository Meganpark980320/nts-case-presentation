import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NTS TranSight - Case-Based Learning",
  description: "국세청 조사관 대상 TranSight Web 교육 - 케이스 기반 학습",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
