import PageTransition from '@/components/animations/PageTransition'
import FadeIn from '@/components/animations/FadeIn'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Phone, Globe, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="pt-20">
        <Section className="min-h-screen bg-black flex items-center">
          <Container>
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <FadeIn>
                <h1 className="text-6xl md:text-8xl font-black text-center mb-8">
                  <span className="text-red-600">LET&apos;S CREATE!</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-2xl md:text-3xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
                  FULLCIRCLE PARTNERS WITH BRANDS READY TO PUSH THE BOUNDARIES OF
                  TRADITIONAL CONTENT.
                </p>
              </FadeIn>

              {/* Contact Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <FadeIn delay={0.3}>
                  <a 
                    href="tel:+2348108319920"
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-red-600/20 to-purple-600/20 p-8 rounded-2xl border border-white/10 hover:border-red-600 transition-all hover:scale-105">
                      <Phone className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <p className="text-gray-400">+234 810 831 9920</p>
                    </div>
                  </a>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <a 
                    href="https://www.fullcircleglobal.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-white/10 hover:border-red-600 transition-all hover:scale-105">
                      <Globe className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">Website</h3>
                      <p className="text-gray-400">fullcircleglobal.org</p>
                    </div>
                  </a>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <a 
                    href="mailto:inaolajiquam@gmail.com"
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-white/10 hover:border-red-600 transition-all hover:scale-105">
                      <Mail className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-gray-400 break-all">inaolajiquam@gmail.com</p>
                    </div>
                  </a>
                </FadeIn>
              </div>

              {/* Message Section */}
              <FadeIn delay={0.6}>
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-12 rounded-3xl text-center">
                  <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                    Ready to Create Magic?
                  </h2>
                  <p className="text-xl text-black/90 mb-4 max-w-2xl mx-auto">
                    Let&apos;s create experiences that don&apos;t just capture attention but
                    command it. Together, we can create stories that shift the culture!
                  </p>
                  <p className="text-lg text-black/80 font-semibold italic">
                    Join us as we bring your ideas to life and create visual magic that
                    leaves a lasting impression.
                  </p>
                </div>
              </FadeIn>

              {/* Social Links (Optional) */}
              <FadeIn delay={0.7}>
                <div className="mt-16 text-center">
                  <p className="text-gray-500 mb-4">Follow our journey</p>
                  <div className="flex justify-center gap-6">
                    {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-red-600 transition-colors font-medium"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      </main>
    </PageTransition>
  )
}
