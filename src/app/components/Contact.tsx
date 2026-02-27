'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormData {
  firstName: string
  phone: string
  email: string
  message: string
}

const hours = [
  { day: 'Monday', time: '9:00 AM – 4:30 PM' },
  { day: 'Tuesday', time: '9:00 AM – 4:30 PM' },
  { day: 'Wednesday', time: 'Closed' },
  { day: 'Thursday', time: '3:00 PM – 7:00 PM' },
  { day: 'Friday', time: '9:00 AM – 4:30 PM' },
  { day: 'Saturday', time: '8:00 AM – 3:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please call us at (404) 552-4779.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Get in <span className="text-brand-red">Touch</span>
          </h2>
          <p className="mt-3 text-gray-400 text-base">
            Book online, call, or just walk in. We&rsquo;ve got you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400 leading-relaxed">
                840 Ernest W Barrett Pkwy NW, #128
                <br />
                Kennesaw, GA 30144
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a
                href="tel:4045524779"
                className="text-brand-red font-semibold hover:text-red-400 transition-colors text-lg"
              >
                (404) 552-4779
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Hours</h3>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between border-b border-white/5 pb-2.5"
                  >
                    <span className="text-sm text-gray-300 font-medium">
                      {h.day}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        h.time === 'Closed' ? 'text-gray-500' : 'text-white'
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="rounded-full bg-brand-red/10 p-4 mb-4">
                  <svg
                    className="h-10 w-10 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Message Sent
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  We&rsquo;ll get back to you soon. Or just call us at{' '}
                  <a href="tel:4045524779" className="text-brand-red">
                    (404) 552-4779
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1.5">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full rounded-lg border border-white/10 bg-brand-darkGray px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-brand-red">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full rounded-lg border border-white/10 bg-brand-darkGray px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full rounded-lg border border-white/10 bg-brand-darkGray px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Message <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full rounded-lg border border-white/10 bg-brand-darkGray px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red resize-none"
                    placeholder="Anything we should know?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-brand-red px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-xl overflow-hidden border border-white/5"
        >
          <iframe
            src="https://maps.google.com/maps?q=840+Ernest+W+Barrett+Pkwy+NW+%23128+Kennesaw+GA+30144&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Furious Styles Barbershop Kennesaw Location"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  )
}
