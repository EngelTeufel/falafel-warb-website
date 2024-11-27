'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function Impressum() {
  return (
    <main className="min-h-screen bg-base py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-accent-darkGreen text-secondary-white rounded-full hover:bg-primary-green transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Startseite
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-8 text-primary-brown">Impressum</h1>
          
          <div className="bg-secondary-white p-8 rounded-lg shadow-lg space-y-6">
            <section>
              <p className="font-bold text-primary-brown">Frische Falafel Warb Hamburg</p>
              <p>Mönckebergstraße 1</p>
              <p>20095 Hamburg</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2 text-primary-brown">Vertreten durch:</h2>
              <p>Reza</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2 text-primary-brown">Kontakt:</h2>
              <p>Telefon: <a href="tel:015906841140" className="text-accent-darkGreen hover:text-primary-green transition-colors">0159 06841140</a></p>
              <p>E-Mail: <a href="mailto:info@frische-falafel-warp.hamburg" className="text-accent-darkGreen hover:text-primary-green transition-colors">info@frische-falafel-warp.hamburg</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2 text-primary-brown">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</h2>
              <p>[USt-ID einfügen, falls vorhanden]</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2 text-primary-brown">Aufsichtsbehörde:</h2>
              <p>Freie und Hansestadt Hamburg, Gewerbeaufsicht</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
