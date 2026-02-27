'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// PLACEHOLDER — swap Booksy link with the shop-level link if different
const BOOKING_URL =
  'https://booksy.com/en-us/26960_adam-peace-owner-master-barber_barber-shop_16252_kennesaw#ba_s=sr_1'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image — using the shop exterior photo */}
      <Image
        src="/images/shop-2.jpg"
        alt="Furious Styles Barbershop Kennesaw"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />

      {/* Grain/noise texture overlay */}
      <div className="absolute inset-0 noise-overlay z-[2] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo mark */}
          <Image
            src="/images/logo.png"
            alt="Furious Styles"
            width={100}
            height={100}
            className="mx-auto mb-6 h-24 w-24 object-contain"
            priority
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            The Sharpest Cuts
            <br />
            <span className="text-brand-red">in Kennesaw</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Walk in looking good. Walk out feeling like the best version of yourself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-brand-red px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:bg-red-700 hover:shadow-xl hover:shadow-red-900/30 hover:scale-105"
          >
            Book Your Cut
          </a>
          <a
            href="#gallery"
            className="rounded border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/40"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-sm text-gray-400"
        >
          ★★★★★ 300+ five-star reviews — walk-ins welcome
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-[3]" />
    </section>
  )
}
