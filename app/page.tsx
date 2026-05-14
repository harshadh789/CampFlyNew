import HeroSection from '@/components/home/HeroSection'
import ExperienceCategories from '@/components/home/ExperienceCategories'
import FeaturedDestinations from '@/components/home/FeaturedDestinations'
import TravelThemes from '@/components/home/TravelThemes'
import WhyChooseCampFly from '@/components/home/WhyChooseCampFly'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ReelsSection from '@/components/home/ReelsSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />
      <ExperienceCategories />
      <FeaturedDestinations />
      <TravelThemes />
      <WhyChooseCampFly />
      <StatsSection />
      <TestimonialsSection />
      <ReelsSection />
      <NewsletterSection />
      <CTASection />
    </main>
  )
}
