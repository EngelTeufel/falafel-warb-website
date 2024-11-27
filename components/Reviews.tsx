'use client'

import { useState, useEffect } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    text: 'Die besten Falafel in ganz Hamburg! So frisch und lecker!',
    author: 'Mia S.'
  },
  {
    text: 'Ein absoluter Geheimtipp – ich komme immer wieder.',
    author: 'Lukas K.'
  },
  {
    text: 'Tolles Essen, super Preise, und der Ayran ist wirklich perfekt!',
    author: 'Hanna P.'
  },
  {
    text: 'Schneller Service und die Wraps sind einfach unschlagbar.',
    author: 'Jonas R.'
  },
  {
    text: 'Ich liebe die Atmosphäre hier – klein, aber fein.',
    author: 'Lea W.'
  },
  {
    text: 'Frische Zutaten und man schmeckt die Liebe zum Detail.',
    author: 'Tim D.'
  },
  {
    text: 'Perfekt für die Mittagspause, komme gerne wieder.',
    author: 'Sophie L.'
  },
  {
    text: 'Der Mix-Teller ist mein Favorit – von allem etwas dabei.',
    author: 'Max B.'
  },
  {
    text: 'Freundliches Personal und immer ein Lächeln auf den Lippen.',
    author: 'Anna K.'
  },
  {
    text: 'Preis-Leistung stimmt hier absolut.',
    author: 'Felix M.'
  }
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-brown">
          Das sagen unsere Gäste
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Vorheriges Review"
          >
            <FaChevronLeft className="w-6 h-6 text-primary-brown" />
          </button>
          
          <div className="overflow-hidden relative h-64">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="text-center px-16">
                  <FaQuoteLeft className="w-12 h-12 mx-auto mb-8 text-primary-green" />
                  <p className="text-2xl italic mb-8 text-primary-brown">{reviews[currentIndex].text}</p>
                  <p className="text-lg font-bold text-accent-darkGreen">– {reviews[currentIndex].author}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Nächstes Review"
          >
            <FaChevronRight className="w-6 h-6 text-primary-brown" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-green' : 'bg-gray-300'
                }`}
                aria-label={`Gehe zu Review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
