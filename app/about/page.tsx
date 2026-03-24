import PageTransition from '@/components/animations/PageTransition'
import FadeIn from '@/components/animations/FadeIn'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const partners = [
  'Beauty Hut', 'TOPICALS', 'L\'ORÉAL PARIS', 'SALAMANCA',
  'crowdr', 'MARTELL', 'ashluxe', 'Troniq Music Inc.',
  'LL&B', 'LANRO', 'deeds.', 'POWER HORSE'
]

const partnerss = [
  {
    name: "Beauty Hut",
    image: '/bhut.png'
  },
  {
    name: "TOPICALS",
    image: '/topicals.png'
  },
  {
    name: "L\'ORÉAL PARIS",
    image: '/loreal.png'
  },
  {
    name: "SALAMANCA",
    image: '/salamanca.png'
  },
  {
    name: "crowdr",
    image: '/crowdr.png'
  },
  {
    name: "MARTELL",
    image: '/martell.png'
  },
  {
    name: "ashluxe",
    image: '/ash.png'
  },
  {
    name: "Troniq Music Inc.",
    image: '/trimusic.png'
  },
  {
    name: "LL&B",
    image: '/llb.png'
  },
  {
    name: "LANRO",
    image: '/zanku.png'
  },
  {
    name: "deeds",
    image: '/deeds.png'
  },
  {
    name: "POWER HORSE",
    image: '/powerhourse.png'
  },

]

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="pt-20 overflow-hidden relative">
        <Section className="min-h-screen flex items-center bg-black inset-0">
          <Image src={'/dark bg.png'}  alt='bg'  fill priority quality={100} className='object-cover '/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
          <Container className='relative z-10'>
            <div className="space-y-16">
              <Image src={'/sticker.png'}  alt='sticker 1' width={200} height={100} className='absolute w-[100px] -right-10 lg:-top-24 -top-14'/>
              {/* Header */}
              <FadeIn>
                
                <h1 className="text-4xl md:text-8xl font-black text-center ">
                  <span className="text-red-600">&quot;PARTNERING WITH </span>
                  <span className="text-white">VISIONARIES&quot;</span>
                </h1>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={0.2}>
                <div className="flex items-center justify-center gap-0 max-w-3xl mx-auto">
                  {/* <Sparkles className="w-8 h-8 text-yellow-400" /> */}
                  <Image src={'/star.png'}  alt='sticker 1' width={60} height={100} className=''/>
                  <p className="text-xl md:text-2xl text-center text-gray-300">
                    As a creative force, we have collaborated with leading brands and more
                  </p>
                </div>
              </FadeIn>

              {/* Partners Grid */}
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto pt-12">
                  {partnerss.map((partner, index) => (
                    <FadeIn key={partner.name} delay={0.5 + index * 0.05}>
                      <div className="flex items-center justify-center p-6  rounded-xl backdrop-blur-sm  transition-all duration-300 hover:scale-105">
                        {/* <p className="text-white font-bold text-center text-sm md:text-base">
                          {partner.name}
                        </p> */}
                        <Image src={partner.image} width={150} height={100} alt={partner.name}/>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>

              {/* Bottom Text */}
              <FadeIn delay={0.8}>
                <div className="max-w-4xl mx-auto pt-12">
                  <p className="text-xl md:text-2xl text-center text-gray-300 leading-relaxed">
                    Our content bridges the gap between live experience and screen,
                    driving engagement by sparking excitement and anticipation that
                    audiences can&apos;t ignore.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      </main>
    </PageTransition>
  )
}
