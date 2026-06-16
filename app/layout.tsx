import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'BridgeUp — Real conversations. Real growth.',
  description:
    'BridgeUp connects young African professionals with seasoned industry leaders through structured, private mentorship sessions — no cold messaging, no awkward intros.',
  keywords: 'mentorship, Africa, professional growth, networking, career guidance',
  openGraph: {
    title: 'BridgeUp — Real conversations. Real growth.',
    description: 'Connect with Africa\'s top professionals for focused mentorship sessions.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
