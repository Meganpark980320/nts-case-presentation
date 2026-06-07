'use client';

export default function PolymarketIntro() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <span className="text-sm tracking-widest text-accent-blue uppercase mb-4 block">
          Case 03
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Polymarket
        </h2>
      </div>
    </div>
  );
}
