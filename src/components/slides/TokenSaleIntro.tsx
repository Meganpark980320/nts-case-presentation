'use client';

export default function TokenSaleIntro() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <span className="text-sm tracking-widest text-accent-cyan uppercase mb-4 block">
          Case 02
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Token Sale
        </h2>
      </div>
    </div>
  );
}
