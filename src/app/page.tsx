import HeroSection from '@/components/homepage/HeroSection';
import IntroSection from '@/components/homepage/IntroSection';
import FeaturesSection from '@/components/homepage/FeaturesSection';
import HowItWorksSection from '@/components/homepage/HowItWorksSection';
import ServiceAreasSection from '@/components/homepage/ServiceAreasSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import CTASection from '@/components/homepage/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
