'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from '../animations/FadeIn'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-black">
      {/* Hero Image Section - Top 70% */}
      <div className="relative flex-1 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/celebration.png"
            alt="Celebration"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-red-600 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Portfolio Branding Section - Bottom 30% */}
      <div className="relative bg-white py-10 lg:py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-8 flex-wrap lg:flex-nowrap">
            {/* FC Logo */}
            <FadeIn delay={0.2}>
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <div className="w-32 h-32 lg:w-[220px] lg:h-[220px] rounded-full border-[10px] lg:border-[20px] border-red-600 flex items-center justify-center bg-white">
                    <span className="text-5xl lg:text-8xl font-black text-red-600 font-cubao">FC</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <div>

              {/* Production + Year */}
              <FadeIn delay={0.4}>
                <div className="text-left flex flex-row flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className=' w-full flex items-end justify-between border-b-[3px] border-red-600'
                  >
                    <p className="text-lg leading-5 lg:text-2xl font-bold text-red-600 mb-1 font-garet">
                      FULL CIRCLE GLOBAL 
                    </p>
                    <p className="text-2xl lg:text-4xl font-black text-red-600 font-cubao">
                      PRODUCTION
                    </p>
                    
                  </motion.div>
                </div>
              </FadeIn>

              {/* Portfolio Text */}
              <FadeIn delay={0.3} className="flex-1">
                <div className="text-left lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-[10rem] font-black text-red-600 leading-none tracking-tight font-cubao">
                      PORTFOLIO
                    </h1>
                  </motion.div>
                </div>
              </FadeIn>

              <p className="text-3xl lg:text-4xl flex-6 font-black text-red-600 mt-2 leading-none lg:text-right font-cubao">2025</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
