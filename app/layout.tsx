import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frische Falafel Warb Hamburg – Beste Falafel direkt am Hauptbahnhof',
  description: 'Entdecke die besten Falafel in Hamburg bei Frische Falafel Warb. Direkt am Hauptbahnhof, frisch zubereitet mit Liebe und besten Zutaten. Jetzt vorbeikommen und genießen!',
  keywords: [
    'Falafel Hamburg',
    'Beste Falafel Hamburg',
    'Falafel Hauptbahnhof Hamburg',
    'Frische Wraps Hamburg',
    'Bulgur Wrap Hamburg',
    'Chicken Wrap Hamburg',
    'Ayran Hamburg',
    'Falafel Laden Hamburg'
  ],
  openGraph: {
    title: 'Frische Falafel Warb – Die besten Falafel Wraps in Hamburg',
    description: 'Lust auf die frischesten Falafel in Hamburg? Besuche uns direkt am Hauptbahnhof. Falafel, Bulgur, Chicken Wraps und erfrischender Ayran – alles mit Liebe gemacht!',
    url: 'https://www.frische-falafel-warb.hamburg',
    siteName: 'Frische Falafel Warb Hamburg',
    locale: 'de_DE',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.frische-falafel-warb.hamburg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Frische Falafel Warb Hamburg",
              "image": "https://www.frische-falafel-warb.hamburg/images/menu/falafel-wrap-hamburg.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mönckebergstraße 1",
                "addressLocality": "Hamburg",
                "postalCode": "20095",
                "addressCountry": "DE"
              },
              "telephone": "+4915906841140",
              "servesCuisine": "Mediterranean, Fast Food",
              "priceRange": "€",
              "url": "https://www.frische-falafel-warb.hamburg",
              "openingHours": "Mo-Sa 10:00-22:00, Su 12:00-20:00"
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
