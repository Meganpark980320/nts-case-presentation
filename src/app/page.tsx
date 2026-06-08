'use client';

import SlideContainer from '@/components/SlideContainer';
import TitleSlide from '@/components/slides/TitleSlide';
import OffRampImage from '@/components/slides/OffRampImage';
import CaseSelection from '@/components/slides/CaseSelection';
import ArbitrageIntro from '@/components/slides/ArbitrageIntro';
import ArbitrageListingImage from '@/components/slides/ArbitrageListingImage';
import ArbitrageGen from '@/components/slides/ArbitrageGen';
import TokenSaleIntro from '@/components/slides/TokenSaleIntro';
import TokenSaleGen from '@/components/slides/TokenSaleGen';
import PolymarketIntro from '@/components/slides/PolymarketIntro';
import PolymarketTable from '@/components/slides/PolymarketTable';
import PolymarketGen from '@/components/slides/PolymarketGen';
import PolymarketFlow from '@/components/slides/PolymarketFlow';

export default function Home() {
  return (
    <main>
      <SlideContainer>
        <TitleSlide />
        <OffRampImage />
        <CaseSelection />
        <ArbitrageIntro />
        <ArbitrageListingImage />
        <ArbitrageGen />
        <TokenSaleIntro />
        <TokenSaleGen />
        <PolymarketIntro />
        <PolymarketTable />
        <PolymarketGen />
        <PolymarketFlow />
      </SlideContainer>
    </main>
  );
}
