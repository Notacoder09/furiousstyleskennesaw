'use client'

import { motion } from 'framer-motion'

// Real reviews sourced from Booksy (Adam Peace) and the old Furious Styles website
const reviews = [
  {
    name: 'Maurice A.',
    stars: 5,
    text: "I'm super grateful for meeting Ty. He is hands down the best barber I've ever had. From the nice conversations to the simple small talk, you'll never have a bad time. Ty has exceptional skills and I'll continue coming to him for my future cuts. If you want to look like a boss, I highly suggest you give him a shot.",
  },
  {
    name: 'Shawn G.',
    stars: 5,
    text: "I travel for work and was just going in for a quick haircut, but had a great experience. The atmosphere they created was great. I felt super comfortable. Best barber experience I've had.",
  },
  {
    name: 'Felecia W.',
    stars: 5,
    text: 'Chrshy Cuts performed an awesome style — she was able to create a look I didn\'t believe possible. Her barbering skills are amazing. I\'m a happy new customer.',
  },
  {
    // Real review from Booksy
    name: 'Long-time Client',
    stars: 5,
    text: "Adam is fantastic! He consistently exceeds my expectations. I've been a client since 2015, and for over a decade, he has been dedicated and loyal. He's a great barber, and I highly recommend him!",
  },
  {
    // Real review from Booksy
    name: 'Satisfied Client',
    stars: 5,
    text: "Adam's cuts are always tight and on point. He takes his time and it's a reminder of the movie Barbershop — the atmosphere is everything. Simply the best.",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brand-red">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Don&rsquo;t Take Our <span className="text-brand-red">Word</span> for It
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            300+ five-star reviews. Here&rsquo;s what the people say.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="rounded-xl bg-brand-darkGray border border-white/5 p-6 transition-all duration-300 hover:border-brand-red/20 hover:-translate-y-1"
            >
              <Stars count={review.stars} />
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-white">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          {/* PLACEHOLDER — swap with actual Google Business review link */}
          <a
            href="https://www.google.com/search?q=furious+styles+barbershop+kennesaw+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-red transition-colors"
          >
            Leave us a review on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
