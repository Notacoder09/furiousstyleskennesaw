'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/cut-1.jpg',
    alt: 'Twisted braids with sharp fade',
    span: 'row-span-2', // tall image
  },
  {
    src: '/images/cut-2.jpg',
    alt: 'Clean skin fade with waves',
    span: '',
  },
  {
    src: '/images/cut-3.jpg',
    alt: 'Precision bald fade',
    span: '',
  },
  {
    src: '/images/cut-4.jpg',
    alt: 'Crisp 360 waves with taper',
    span: 'row-span-2',
  },
  {
    src: '/images/shop-1.jpg',
    alt: 'Furious Styles barber at work',
    span: 'col-span-2',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Our <span className="text-brand-red">Work</span>
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Precision cuts. Clean lines. Every time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[250px] sm:auto-rows-[300px]"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
