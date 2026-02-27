import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Furious Styles Barbershop | Kennesaw, GA — Premium Cuts & Grooming',
  description:
    'Kennesaw\'s top-rated barbershop. Precision fades, sharp lineups, and full grooming experiences. 5-star rated with 300+ reviews. Book online or walk in.',
  keywords: [
    'barbershop kennesaw',
    'barber near me',
    'furious styles',
    'haircut kennesaw ga',
    'fade haircut',
    'mens grooming kennesaw',
    'best barber kennesaw',
  ],
  openGraph: {
    title: 'Furious Styles Barbershop | Kennesaw, GA',
    description: 'Premium cuts and grooming in Kennesaw. 300+ five-star reviews. Book now.',
    type: 'website',
    locale: 'en_US',
    // PLACEHOLDER — swap with deployed URL
    url: 'https://furiousstyleskennesaw.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-dark text-white antialiased">{children}</body>
    </html>
  )
}
