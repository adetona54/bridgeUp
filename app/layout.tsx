import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import DevNav from '@/components/DevNav'

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
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'BridgeUp — Real conversations. Real growth.',
  description:
    'BridgeUp connects young professionals with industry experts through structured, dignified sessions — no cold messaging, no awkward intros.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <DevNav />
        {children}
      </body>
    </html>
  )
}
