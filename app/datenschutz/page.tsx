'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function Datenschutz() {
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

          <h1 className="text-4xl font-bold mb-8 text-primary-brown">Datenschutzerklärung</h1>
          
          <div className="bg-secondary-white p-8 rounded-lg shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">1. Verantwortliche Stelle</h2>
              <p>Frische Falafel Warb Hamburg</p>
              <p>Mönckebergstraße 1</p>
              <p>20095 Hamburg</p>
              <p>Telefon: <a href="tel:015906841140" className="text-accent-darkGreen hover:text-primary-green transition-colors">0159 06841140</a></p>
              <p>E-Mail: <a href="mailto:info@frische-falafel-warp.hamburg" className="text-accent-darkGreen hover:text-primary-green transition-colors">info@frische-falafel-warp.hamburg</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>Wir speichern personenbezogene Daten (z. B. Name, E-Mail-Adresse, Telefonnummer) nur, wenn sie uns freiwillig zur Verfügung gestellt werden, z. B. bei einer Kontaktanfrage oder einer Bestellung. Die Verarbeitung erfolgt ausschließlich zweckgebunden zur Bearbeitung Ihrer Anfrage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">3. Weitergabe von Daten</h2>
              <p>Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist zur Erfüllung unseres Services erforderlich oder gesetzlich vorgeschrieben.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">4. Cookies und Tracking</h2>
              <p>Unsere Webseite kann Cookies verwenden, um die Benutzererfahrung zu verbessern. Nutzer können die Speicherung von Cookies in den Einstellungen ihres Browsers deaktivieren. Einige Funktionen der Webseite könnten dadurch eingeschränkt sein.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">5. Rechte der Nutzer</h2>
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Auskunft über die gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Datenverarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="mt-4">Zur Ausübung dieser Rechte wenden Sie sich bitte an:</p>
              <p>Telefon: <a href="tel:015906841140" className="text-accent-darkGreen hover:text-primary-green transition-colors">0159 06841140</a></p>
              <p>E-Mail: <a href="mailto:info@frische-falafel-warp.hamburg" className="text-accent-darkGreen hover:text-primary-green transition-colors">info@frische-falafel-warp.hamburg</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">6. Kontakt für Datenschutzfragen</h2>
              <p>Für Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:</p>
              <p>Telefon: <a href="tel:015906841140" className="text-accent-darkGreen hover:text-primary-green transition-colors">0159 06841140</a></p>
              <p>E-Mail: <a href="mailto:info@frische-falafel-warp.hamburg" className="text-accent-darkGreen hover:text-primary-green transition-colors">info@frische-falafel-warp.hamburg</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary-brown">7. Änderungen dieser Datenschutzerklärung</h2>
              <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen unseres Services anzupassen.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
