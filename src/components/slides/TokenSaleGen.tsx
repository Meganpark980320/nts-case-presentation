'use client';

import Image from 'next/image';

export default function TokenSaleGen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16">
      <div className="text-center mb-8">
        <span className="text-sm tracking-widest text-accent-cyan uppercase mb-2 block">
          Token Sale
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          토큰 세일 조사 구조
        </h2>
      </div>

      <div className="w-full max-w-5xl rounded-xl overflow-hidden">
        <div className="relative w-full aspect-[16/9] bg-white rounded-xl">
          <Image
            src="/img/tokensale_gen.png"
            alt="토큰 세일 조사 구조"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
