'use client';

import Image from 'next/image';
import upbitArbListing from '@/assets/img/01_upbit_arb_listing.png';

export default function ArbitrageListingImage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16">
      <div className="text-center mb-4">
        <span className="text-sm tracking-widest text-accent-purple uppercase mb-2 block">
          Arbitrage
        </span>
      </div>

      <div className="w-full flex justify-center">
        <div className="rounded-xl bg-white p-3 shadow-2xl shadow-purple-900/20">
          <Image
            src={upbitArbListing}
            alt="업비트 원화상장 아비트라지 케이스 이미지"
            className="max-h-[72vh] w-auto max-w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
