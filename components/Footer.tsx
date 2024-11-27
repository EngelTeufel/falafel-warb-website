'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-primary-brown text-secondary-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-accent-yellow" />
                <a 
                  href="tel:015906841140" 
                  className="hover:text-accent-yellow transition-colors"
                >
                  0159 0684 1140
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-accent-yellow" />
                <a 
                  href="mailto:info@frische-falafel-warp.hamburg" 
                  className="hover:text-accent-yellow transition-colors"
                >
                  info@frische-falafel-warp.hamburg
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-accent-yellow" />
                <span>Mönckebergstraße 1, 20095 Hamburg</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li>Montag - Freitag: 10:00 - 22:00</li>
              <li>Samstag: 11:00 - 22:00</li>
              <li>Sonntag: 12:00 - 21:00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Folge uns</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-accent-yellow text-primary-brown p-3 rounded-full hover:bg-primary-green hover:text-secondary-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-accent-yellow text-primary-brown p-3 rounded-full hover:bg-primary-green hover:text-secondary-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-yellow/30 text-center">
          <p>&copy; {new Date().getFullYear()} Frische Falafel Warp Hamburg. Alle Rechte vorbehalten.</p>
          <div className="mt-4 space-x-4">
            <Link href="/impressum" className="hover:text-accent-yellow transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent-yellow transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
