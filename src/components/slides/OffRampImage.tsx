'use client';

import Image from 'next/image';
import offRampImage from '@/assets/img/off-ramp.png';

export default function OffRampImage() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-16">
      <div className="rounded-xl bg-white p-3 shadow-2xl shadow-cyan-900/20">
        <Image
          src={offRampImage}
          alt="On-ramp와 off-ramp 구조 이미지"
          className="max-h-[78vh] w-auto max-w-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
