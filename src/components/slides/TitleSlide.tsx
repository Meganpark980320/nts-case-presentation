'use client';

export default function TitleSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-8">
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Bonanza Factory &times; TranSight
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">CASE-BASED</span>
          <br />
          <span className="text-white">LEARNING</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12">
          케이스 기반 교육 &mdash; Web3 거래추적 실전 분석
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {['가상자산 추적', '온체인 분석', 'DeFi 해석', '실전 케이스'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm glass-card text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-16 text-sm text-gray-600">
          국세청 조사관 대상 TranSight Web 교육
        </div>
      </div>
    </div>
  );
}
