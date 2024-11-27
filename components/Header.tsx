'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="relative w-full h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Frische Falafel Warb Hamburg"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      
      {/* Logo Container */}
      <div className="absolute inset-0 flex items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-6 md:mt-8 lg:mt-10"
        >
          <div className="relative w-48 md:w-56 lg:w-64 aspect-square">
            <div className="absolute inset-0 bg-white/85 rounded-full shadow-xl" />
            <Image
              src="/images/logo.png"
              alt="Frische Falafel Warb Hamburg Logo"
              fill
              className="object-contain p-4 drop-shadow-md"
              priority
            />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
