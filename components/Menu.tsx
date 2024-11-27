'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const menuItems = [
  {
    name: 'Falafel Wrap',
    price: '6,00 €',
    description: 'Frisch zubereitete Falafel mit knackigem Gemüse und hausgemachten Saucen',
    image: '/images/menu/falafel-wrap-hamburg.jpg',
    alt: 'Frischer Falafel-Wrap mit Gemüse und Sauce in Hamburgs Hauptbahnhof'
  },
  {
    name: 'Bulgur Wrap',
    price: '6,00 €',
    description: 'Würziger Bulgur mit mediterranem Gemüse und orientalischen Gewürzen',
    image: '/images/menu/bulgur-wrap-hamburg.jpg',
    alt: 'Hausgemachter Bulgur-Wrap mit frischem Gemüse in Hamburg'
  },
  {
    name: 'Chicken Wrap',
    price: '7,00 €',
    description: 'Saftiges Hähnchenfleisch mit frischem Gemüse und spezieller Sauce',
    image: '/images/menu/chicken-wrap-hamburg.jpg',
    alt: 'Saftiger Chicken-Wrap mit hausgemachter Sauce in Hamburg'
  },
  {
    name: 'Mix-Wrap',
    price: '9,00 €',
    description: 'Eine köstliche Kombination aus unseren beliebtesten Zutaten',
    image: '/images/menu/mix-wrap-hamburg.jpg',
    alt: 'Mix-Wrap Spezialität mit Falafel, Bulgur und Chicken in Hamburg'
  },
  {
    name: 'Ayran',
    price: '1,50 €',
    description: 'Erfrischendes türkisches Joghurtgetränk',
    image: '/images/menu/ayran-hamburg.jpg',
    alt: 'Erfrischender hausgemachter Ayran in Hamburg'
  },
  {
    name: 'Kaltgetränke',
    price: '2,50 €',
    description: 'Verschiedene alkoholfreie Getränke zur Auswahl',
    image: '/images/menu/drinks-hamburg.jpg',
    alt: 'Auswahl an erfrischenden Kaltgetränken in Hamburg'
  }
]

export default function Menu() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary-brown">Unsere Speisekarte</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecke unsere köstliche Auswahl an frisch zubereiteten Wraps und Getränken
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-primary-brown">{item.name}</h3>
                  <span className="text-xl font-bold text-accent-darkGreen">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
