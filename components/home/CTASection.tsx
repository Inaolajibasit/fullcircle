'use client'

import Image from 'next/image'
import FadeIn from '../animations/FadeIn'
import Container from '../ui/Container'
import Section from '../ui/Section'
import { Phone, Globe, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <Section className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/headphones.png"
          alt="FullCircle"
          fill
          className="object-cover opacity-40"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-black font-cubao">
                <span className="text-red-600">LET&apos;S</span>
                <br />
                <span className="text-white">CREATE!</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl font-bold max-w-2xl leading-tight font-garet">
                FULLCIRCLE PARTNERS WITH BRANDS READY TO PUSH THE BOUNDARIES OF
                TRADITIONAL CONTENT.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4 pt-4">
                <a 
                  href="tel:+2348108319920"
                  className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group backdrop-blur-sm border border-white/10"
                >
                  <Phone className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="font-bold font-garet">+234 810 831 9920</span>
                </a>
                
                <a 
                  href="https://www.fullcircleglobal.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group backdrop-blur-sm border border-white/10"
                >
                  <Globe className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="font-bold font-garet">fullcircleglobal.org</span>
                </a>
                
                <a 
                  href="mailto:inaolajiquam@gmail.com"
                  className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group backdrop-blur-sm border border-white/10"
                >
                  <Mail className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="font-bold font-garet">inaolajiquam@gmail.com</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Content */}
          <FadeIn delay={0.6}>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-semibold font-garet">
                Let&apos;s create experiences that don&apos;t just capture attention but
                command it. Together, we can create stories that shift the culture!
              </p>
              <p className="text-lg italic text-gray-300 font-garet">
                Join us as we bring your ideas to life and create visual magic that
                leaves a lasting impression.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
