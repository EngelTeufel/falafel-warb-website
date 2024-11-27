'use client'

import { FaLeaf, FaHeart, FaPiggyBank } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const features = [
  {
    icon: FaLeaf,
    title: 'Frische Zutaten',
    description: 'Unsere Gerichte werden täglich frisch zubereitet – mit Liebe, Leidenschaft und den besten Zutaten.'
  },
  {
    icon: FaHeart,
    title: 'Einzigartige Atmosphäre',
    description: 'Ein Ort der Zuflucht mitten im Trubel des Hamburger Hauptbahnhofs.'
  },
  {
    icon: FaPiggyBank,
    title: 'Fairer Preis',
    description: 'Leckeres Essen muss nicht teuer sein – bei uns bekommst du Qualität zum besten Preis.'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Features() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-brown">
            Warum Falafel Warb?
          </h2>
        </AnimatedSection>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="inline-block p-4 bg-primary-green text-secondary-white rounded-full mb-6"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-primary-brown">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
