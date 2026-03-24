import PageTransition from '@/components/animations/PageTransition'
import HeroSection from '@/components/home/HeroSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <CTASection />
      </main>
    </PageTransition>
  )
}
