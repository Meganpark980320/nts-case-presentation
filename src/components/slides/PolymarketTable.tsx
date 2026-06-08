'use client';

import Image from 'next/image';
import polymarketTable from '@/assets/img/polymarket_table.png';

export default function PolymarketTable() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16">
      <div className="text-center mb-4">
        <span className="text-sm tracking-widest text-accent-blue uppercase mb-2 block">
          Polymarket
        </span>
      </div>

      <div className="w-full flex justify-center">
        <div className="rounded-xl bg-white p-3 shadow-2xl shadow-blue-900/20">
          <Image
            src={polymarketTable}
            alt="Polymarket 정산 금액과 실제 손익 비교표"
            className="max-h-[68vh] w-auto max-w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
