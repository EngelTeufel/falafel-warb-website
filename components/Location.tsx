'use client'

import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const openingHours = [
  { day: 'Montag - Freitag', hours: '10:00 - 22:00' },
  { day: 'Samstag', hours: '11:00 - 22:00' },
  { day: 'Sonntag', hours: '12:00 - 21:00' }
]

export default function Location() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-brown">
            Hier findest du uns
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-brown">Adresse</h3>
                  <p className="text-gray-600">
                    Mönckebergstraße 1<br />
                    20095 Hamburg<br />
                    <span className="text-accent-darkGreen">(gegenüber REWE)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-brown">Telefon</h3>
                  <a 
                    href="tel:015906841140" 
                    className="text-accent-darkGreen hover:text-primary-green transition-colors"
                  >
                    0159 0684 1140
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaClock className="w-6 h-6 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-brown">Öffnungszeiten</h3>
                  <ul className="space-y-2">
                    {openingHours.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        <span className="font-medium">{item.day}:</span> {item.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-darkGreen hover:bg-primary-green text-secondary-white font-bold py-3 px-6 rounded-full transition-colors mt-4"
                onClick={() => window.open('https://www.google.com/maps/dir//Frische+Falafel+Mönckebergstraße+1+20095+Hamburg', '_blank')}
              >
                Route planen
              </motion.button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.3338060474816!2d10.005421799999999!3d53.5518084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f312cf0566b%3A0xb49542043e4b3ea5!2sFrische%20Falafel!5e0!3m2!1sde!2sde!4v1732712207434!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort von Frische Falafel"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
