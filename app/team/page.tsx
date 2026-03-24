import PageTransition from '@/components/animations/PageTransition'
import FadeIn from '@/components/animations/FadeIn'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Image from 'next/image'


const team = [
  {
    name: 'WALE LALA',
    role: 'Director/CopyWriter',
    period: '2020 - Now',
    image: '/lala.png' // Placeholder
  },
  {
    name: 'INAOLAJI ENIOLA',
    role: 'Production Manager',
    period: '2019 - Now',
    image: '/eni.png' // Placeholder
  },
  {
    name: 'QUAM',
    role: 'Founder/Head Producer',
    period: '2017 - Now',
    description: 'Quam is a world-class Editor, Content producer, and Creative Director known for his ability to immerse viewers in unforgettable experiences. With a signature ability to capture energy and emotion that leap beyond the screen, he creates stories that spark desire, connection, and that unmistakable feeling of FOMO.',
    fullDescription: 'His creative vision and leadership at FullCircleGlobal has earned collaborations with some of the biggest brands and artists both locally and internationally.',
    image: '/quam.png' // Placeholder
  }
]

export default function TeamPage() {
  return (
    <PageTransition>
      <main className="pt-20">
        <Section className="min-h-screen bg-black">
          <Container>
            {/* Header */}
            <FadeIn>
              <h1 className="text-6xl md:text-8xl font-black text-center mb-20">
                <span className="text-red-600">TEAM</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="max-w-6xl mx-auto mt-20">
                <div className="relative">
                  {/* Title */}
                  <div className="mb-12">
                    <h2 className="text-5xl md:text-7xl font-black mb-4">
                      <span className="text-white">HEY THERE,</span>
                      <br />
                      <span className="text-red-600">QUAM HERE!</span>
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-red-600/20 border-8 border-dotted border-blue-600 rotate-3 hover:rotate-0 transition-transform duration-500">
                        {/* Decorative frame effect */}
                        <div className="absolute inset-0 border-8 border-black/50"></div>
                        {/* Placeholder for image */}
                        <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/10">
                          <Image fill className='object-cover' src={team[2].image} alt={team[2].name} priority quality={100} />
                        </div>
                        
                      </div>
                      <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-3 rounded-xl border-2 border-red-600">
                        <p className="font-bold">Founder/Head Producer</p>
                        <p className="text-sm text-gray-400">2017 - Now</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Quam is a <span className="text-red-600 font-bold">world-class Editor, Content producer, and Creative Director</span> known for his ability to immerse viewers in unforgettable experiences. With a signature ability to capture energy and emotion that leap beyond the screen, he creates <span className="text-red-600 font-bold">stories that spark desire, connection, and that unmistakable feeling of FOMO.</span>
                      </p>
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        His creative vision and leadership at FullCircleGlobal has earned <span className="text-red-600 font-bold">collaborations with some of the biggest brands and artists both locally and internationally.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl my-[10rem] mx-auto">
              {/* First Two Members */}
              {team.slice(0, 2).map((member, index) => (
                <FadeIn key={member.name} delay={0.2 + index * 0.2}>
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] bg-gradient-to-br from-red-600/20 to-purple-600/20">
                      {/* Placeholder for image */}
                      <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white/10">
                        {/* {member.name.split(' ')[0]} */}
                        <Image fill className='object-cover' src={member.image} alt={member.name} priority quality={100} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                          <h3 className="text-2xl font-black text-black mb-1">{member.name}</h3>
                          <p className="text-gray-700 font-medium">{member.role}</p>
                          <p className="text-sm text-gray-600 italic">{member.period}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Featured Member - Quam */}
            
          </Container>
        </Section>
      </main>
    </PageTransition>
  )
}
