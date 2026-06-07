'use client';

import SlideContainer from '@/components/SlideContainer';
import TitleSlide from '@/components/slides/TitleSlide';
import CaseSelection from '@/components/slides/CaseSelection';
import ArbitrageIntro from '@/components/slides/ArbitrageIntro';
import ArbitrageGen from '@/components/slides/ArbitrageGen';
import TokenSaleIntro from '@/components/slides/TokenSaleIntro';
import TokenSaleGen from '@/components/slides/TokenSaleGen';
import PolymarketIntro from '@/components/slides/PolymarketIntro';
import PolymarketGen from '@/components/slides/PolymarketGen';
import PolymarketFlow from '@/components/slides/PolymarketFlow';

export default function Home() {
  return (
    <main>
      <SlideContainer>
        <TitleSlide />
        <CaseSelection />
        <ArbitrageIntro />
        <ArbitrageGen />
        <TokenSaleIntro />
        <TokenSaleGen />
        <PolymarketIntro />
        <PolymarketGen />
        <PolymarketFlow />
      </SlideContainer>
    </main>
  );
}
