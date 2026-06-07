'use client';

import Image from 'next/image';

export default function ArbitrageGen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16">
      <div className="text-center mb-8">
        <span className="text-sm tracking-widest text-accent-purple uppercase mb-2 block">
          Arbitrage
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          상장 아비트라지 조사 구조
        </h2>
      </div>

      <div className="w-full max-w-5xl rounded-xl overflow-hidden">
        <div className="relative w-full aspect-[16/9] bg-white rounded-xl">
          <Image
            src="/img/arbitrage_gen.png"
            alt="상장 아비트라지 조사 구조"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
