'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// PLACEHOLDER — individual Booksy links unknown; using Adam's link for all barbers.
// Swap each barber's bookingUrl with their personal Booksy page.
const team = [
  {
    name: 'Adam',
    title: 'Owner / Master Barber',
    quote: '15 years of making people feel like the best version of themselves.',
    bookingUrl:
      'https://booksy.com/en-us/26960_adam-peace-owner-master-barber_barber-shop_16252_kennesaw#ba_s=sr_1',
    image: '/images/shop-1.jpeg',
    isLogo: false,
    instagram: '#', // PLACEHOLDER — swap with real IG handle
  },
  {
    name: 'Ty',
    title: 'Senior Barber',
    // Real quote sourced from a client review on the old website
    quote: 'Hands down the best barber you\'ll ever sit in the chair with.',
    bookingUrl:
      'https://booksy.com/en-us/26960_adam-peace-owner-master-barber_barber-shop_16252_kennesaw#ba_s=sr_1', // PLACEHOLDER — swap with Ty's Booksy link
    image: '/images/logo.jpg', // PLACEHOLDER — swap with Ty's headshot
    isLogo: true,
    instagram: '#', // PLACEHOLDER
  },
  {
    name: 'Pierre',
    title: 'Barber',
    quote: 'Clean work, sharp lines, no shortcuts.', // PLACEHOLDER
    bookingUrl:
      'https://booksy.com/en-us/26960_adam-peace-owner-master-barber_barber-shop_16252_kennesaw#ba_s=sr_1', // PLACEHOLDER — swap with Pierre's Booksy link
    image: '/images/logo.jpg', // PLACEHOLDER — swap with Pierre's headshot
    isLogo: true,
    instagram: '#', // PLACEHOLDER
  },
  {
    name: 'Tristan',
    title: 'Barber',
    quote: 'Every cut is a canvas. I don\'t do average.', // PLACEHOLDER
    bookingUrl:
      'https://booksy.com/en-us/26960_adam-peace-owner-master-barber_barber-shop_16252_kennesaw#ba_s=sr_1', // PLACEHOLDER — swap with Tristan's Booksy link
    image: '/images/logo.jpg', // PLACEHOLDER — swap with Tristan's headshot
    isLogo: true,
    instagram: '#', // PLACEHOLDER
  },
  {
    name: 'ABL',
    title: 'Barber',
    quote: 'Consistency is everything. You\'ll look right every time.', // PLACEHOLDER
    bookingUrl:
      'https://booksy.com/en-us/26960_adam-peace-owner-master-barber_barber-shop_16252_kennesaw#ba_s=sr_1', // PLACEHOLDER — swap with ABL's Booksy link
    image: '/images/logo.jpg', // PLACEHOLDER — swap with ABL's headshot
    isLogo: true,
    instagram: '#', // PLACEHOLDER
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Meet the <span className="text-brand-red">Team</span>
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Five chairs. Five different styles. One standard: excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((barber) => (
            <motion.div
              key={barber.name}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl bg-brand-darkGray border border-white/5 transition-all duration-300 hover:border-brand-red/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/5"
            >
              {/* Barber photo */}
              <div className={`relative h-72 overflow-hidden ${barber.isLogo ? 'bg-black flex items-center justify-center' : ''}`}>
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${barber.isLogo ? 'object-contain p-8' : 'object-cover'}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGray via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{barber.name}</h3>
                <p className="text-sm font-medium text-brand-red mt-1">
                  {barber.title}
                </p>
                <p className="mt-3 text-sm text-gray-400 italic leading-relaxed">
                  &ldquo;{barber.quote}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={barber.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded bg-brand-red px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    Book with {barber.name}
                  </a>
                  <a
                    href={barber.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-white/10 p-2.5 text-gray-400 transition-colors hover:text-brand-red hover:border-brand-red/30"
                    aria-label={`${barber.name} on Instagram`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
