import PageTransition from '@/components/animations/PageTransition'
import FadeIn from '@/components/animations/FadeIn'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import VideoCard from '@/components/ui/VideoCard'
import { Sparkles } from 'lucide-react'

// ADD YOUR VIDEO IDs HERE
// For YouTube: Just the ID (e.g., 'dQw4w9WgXcQ')
// For Vimeo: Add platform: 'vimeo' and thumbnail

const brandCampaigns = {
  videos: [
    { 
      id: 'dQw4w9WgXcQ', // REPLACE: Your video ID
      title: 'CROWDR - Every Champion Was Once A Dreamer',
      category: 'Commercial',
      platform: 'vimeo', // Uncomment for Vimeo
      thumbnail: '/images/thumbnails/crowdr.jpg' // Add for Vimeo
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'POWERHORSE X ODUMODUBLVCK',
      category: 'Commercial'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'BEAUTYHUT X LOREAL PRO',
      category: 'Commercial'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'ESSENCE MAG X ADE SAMUEL',
      category: 'Commercial'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'SALAMANCA',
      category: 'Brand Reel'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'ASHLUXE OLYMPIAD',
      category: 'Brand Reel'
    },
  ],
  commercials: [
    { title: 'CROWDR', subtitle: '"EVERY CHAMPION WAS ONCE A DREAMER CAMPAIGN"' },
    { title: 'POWERHORSE X ODUMODUBLVCK', subtitle: 'ANNOUNCEMENT CAMPAIGN VIDEO' },
    { title: 'BEAUTYHUT X LOREAL PRO', subtitle: 'ANNOUNCEMENT CAMPAIGN VIDEO' },
    { title: 'ESSENCE MAG X ADE SAMUEL', subtitle: 'ANNOUNCEMENT VIDEO' }
  ],
  brandReels: [
    'SALAMANCA', 'ASHLUXE OLYMPIAD', 'IWADIRA'
  ]
}

const musicVideos = {
  videos: [
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'BRAZY - DADDY',
      category: 'Production'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'JOEL DRE - COME OVER',
      category: 'Production'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'SOLIS - SORRY FOR CALLING',
      category: 'Production'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'ZLATAN - HAPPY DAYS',
      category: 'Post Production'
    },
  ],
  production: [
    'BRAZY - DADDY',
    'JOEL DRE - COME OVER',
    'SOLIS - SORRY FOR CALLING',
    'VIVENDII - THE SHIFT [FT CRUEL SANTINO, KNUCKS AND JERIQ]',
    'VIVENDII - MEZEBU [FT. TENI & MOWALOLA]',
    'SOLIS - 4K! VISUALIZER [FT. YT]',
    'FINE MELANIN - KOLA WILLAIMS'
  ],
  postProduction: [
    'ZLATAN - HAPPY DAYS',
    'LEATHER PARK - RESURRECT [FT. ODUNSI, BNYX & JERIQ]',
    'YKB BO CARD'
  ]
}

const experientialVideos = {
  videos: [
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'TOPICALS',
      category: 'Brand Activation'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'DAVIDO X MARTELL',
      category: 'Brand Activation'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'ARYA STAR YEAR I TURNED 21',
      category: 'Festival'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'OLYMPIAD ASHLUXE',
      category: 'Festival'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'SPOTIFY WRAPPED',
      category: 'Festival'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'REMA: ULTRA',
      category: 'Festival'
    },
    { 
      id: 'dQw4w9WgXcQ', // REPLACE
      title: 'FEMI: David',
      category: 'Festival'
    },
  ],
  brandActivations: [
    'TOPICALS',
    'DAVIDO X MARTELL',
    'NATIVE X MELANIN UNSCRIPTED'
  ],
  festivals: [
    'ARYA STAR YEAR I TURNED 21',
    'OLYMPIAD ASHLUXE',
    'WAF SKATE NOISE',
    'SPOTIFY WRAPPED',
    'RAMPA/NAOMI CAMPBELL',
    'LEOSTAYTRILL X HOMECOMING',
    'LLONA: HOMELESS TOUR',
    'REMA: ULTRA',
    'ASHLUXY BRAND ACTIVATION',
    'VOGUE BOYS SUMMER COOKOUT',
    'TEMS',
    'DOUBLE THE MAGIC W CLERMONT TWINS',
    'BLAQBONES NO EXCUES ALBUM LISTENING',
    'WE GO AGAIN VOGUE BOYS'
  ]
}

export default function WorkPage() {
  return (
    <PageTransition>
      <main className="pt-20">
        {/* Brand Campaigns Section */}
        <Section className="bg-black">
          <Container>
            <FadeIn>
              <h1 className="text-5xl md:text-8xl font-black text-center mb-4 font-cubao">
                <span className="text-red-600">BRAND CAMPAIGNS</span>
              </h1>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              {/* Video Grid with VideoCard Component */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {brandCampaigns.videos.map((video, index) => (
                    <VideoCard
                      key={video.id + index}
                      videoId={video.id}
                      title={video.title}
                      category={video.category}
                      // platform={video.platform}
                      thumbnail={video.thumbnail}
                    />
                  ))}
                </div>
              </FadeIn>

              {/* Campaign List */}
              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-black text-white mb-4 font-cubao">Commercials</h3>
                      <ul className="space-y-3">
                        {brandCampaigns.commercials.map((item) => (
                          <li key={item.title} className="text-gray-300 font-garet">
                            <span className="font-bold text-white">{item.title}:</span>{' '}
                            <span className="text-sm">{item.subtitle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-4 font-cubao">Brand Reels</h3>
                    <div className="flex flex-wrap gap-3">
                      {brandCampaigns.brandReels.map((brand) => (
                        <span key={brand} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer font-garet">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </Section>

        {/* Music Videos Section */}
        <Section className="bg-gradient-to-b from-black to-gray-900">
          <Container>
            <FadeIn>
              <h2 className="text-6xl md:text-8xl font-black text-center mb-4 font-cubao">
                <span className="text-red-600">MUSIC VIDEOS</span>
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              {/* Video Grid with VideoCard Component */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {musicVideos.videos.map((video, index) => (
                    <VideoCard
                      key={video.id + index}
                      videoId={video.id}
                      title={video.title}
                      category={video.category}
                      // platform={video.platform}
                      // thumbnail={video.thumbnail}
                    />
                  ))}
                </div>
              </FadeIn>

              {/* Music Videos List */}
              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-black text-white mb-4 font-cubao">Production</h3>
                      <ul className="space-y-2">
                        {musicVideos.production.map((video) => (
                          <li key={video} className="text-gray-300 hover:text-white transition-colors cursor-pointer font-garet">
                            {video}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-4 font-cubao">Post Production</h3>
                    <ul className="space-y-2">
                      {musicVideos.postProduction.map((video) => (
                        <li key={video} className="text-gray-300 hover:text-white transition-colors cursor-pointer font-garet">
                          {video}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </Section>

        {/* Experiential Videos Section */}
        <Section className="bg-red-600 text-black">
          <Container>
            <FadeIn>
              <h2 className="text-4xl md:text-8xl font-black text-center mb-4 font-cubao">
                EXPERIENTIAL VIDEOS
              </h2>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              {/* Video Grid with VideoCard Component */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {experientialVideos.videos.map((video, index) => (
                    <VideoCard
                      key={video.id + index}
                      videoId={video.id}
                      title={video.title}
                      category={video.category}
                      // platform={video.platform}
                      // thumbnail={video.thumbnail}
                    />
                  ))}
                </div>
              </FadeIn>

              {/* Experiential List */}
              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <div>
                    <h3 className="text-3xl font-black mb-4 font-cubao">Brand Activations</h3>
                    <ul className="space-y-2">
                      {experientialVideos.brandActivations.map((item) => (
                        <li key={item} className="font-semibold hover:font-bold transition-all cursor-pointer font-garet">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-3xl font-black mb-4 font-cubao">Festivals & Performances</h3>
                      <div className="space-y-2">
                        {experientialVideos.festivals.map((item) => (
                          <div key={item} className=" hover:font-bold font-semibold transition-all cursor-pointer font-garet">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </Section>

        {/* Philosophy Section */}
        <Section className="bg-black relative overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          </div>

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-7xl font-black leading-tight font-cubao">
                    <span className="text-red-600">&quot;STEP INSIDE THE </span>
                    <span className="text-white">EXPERIENCE&quot;</span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed font-garet">
                    Here&apos;s a look at some of our favourite work.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed font-garet">
                    Each piece is crafted to make viewers feel that they&apos;re on the edge
                    of something unforgettable, from festival highlights to brand-driven
                    campaigns. We bring a sense of urgency and energy that speaks directly
                    to audiences.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="aspect-video bg-gradient-to-br from-red-600/30 to-purple-600/30 rounded-2xl overflow-hidden">
                  {/* You can add a featured video here */}
                  <VideoCard
                    videoId="dQw4w9WgXcQ" // REPLACE with featured video
                    title="Featured Work"
                    category="Showcase"
                  />
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* About FullCircle Section */}
        <Section className="bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          <Container>
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-4xl md:text-7xl font-black mb-8 font-cubao">
                  <span className="text-red-600">FULLCIRCLE</span>
                  <span className="text-white">.</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-garet">
                  We specialize in creating unforgettable, FOMO-driven content for brands,
                  music artists, and festivals. We capture the spirit of experiences &
                  artistry—making audiences yearn to be part of every moment.
                </p>
              </FadeIn>
            </div>
          </Container>
        </Section>
      </main>
    </PageTransition>
  )
}
  
