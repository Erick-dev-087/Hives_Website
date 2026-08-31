import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import DeliverySection from '@/components/home/DeliverySection';
import ProductRangeSection from '@/components/home/ProductRangeSection';
import MadeForTheMoment from '@/components/home/MadeForTheMoment';
import CravingSection from '@/components/home/CravingSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import FinalCTASection from '@/components/home/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DeliverySection />
      <ProductRangeSection />
      <MadeForTheMoment />
      <CravingSection />
      <SocialProofSection />
      <FinalCTASection />
    </>
  );
}
