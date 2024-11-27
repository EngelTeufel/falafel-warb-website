'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { src: '/images/gallery/falafel-wrap.jpg', alt: 'Falafel Wrap' },
  { src: '/images/gallery/bulgur-wrap.jpg', alt: 'Bulgur Wrap' },
  { src: '/images/gallery/chicken-wrap.jpg', alt: 'Chicken Wrap' },
  { src: '/images/gallery/mix-warp.jpg', alt: 'Mix-Warp' },
  { src: '/images/gallery/restaurant.jpg', alt: 'Unser Restaurant' },
  { src: '/images/gallery/preparation.jpg', alt: 'Frische Zubereitung' }
]

export default function ImageGallery() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
