import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stimulation Clicker Game',
  description: 'Play stimulation Clicker - A dynamic and fast-paced clicker game by Neal Agarwal',
  keywords: 'stimulation clicker, clicker game, neal agarwal, online game, browser game, casual game',
  authors: [{ name: 'Neal Agarwal' }],
  creator: 'Neal Agarwal',
  publisher: 'Neal Agarwal',
  openGraph: {
    title: 'Stimulation Clicker Game',
    description: 'Play Stimulation Clicker - A dynamic and fast-paced clicker game by Neal Agarwal',
    type: 'website',
    locale: 'en_US',
    siteName: 'Stimulation Clicker Game',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stimulation Clicker Game Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stimulation Clicker Game',
    description: 'Play Stimulation Clicker - A dynamic and fast-paced clicker game by Neal Agarwal',
    images: ['/og-image.jpg']
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: '', // 你需要替换这个值
  },
  alternates: {
    canonical: 'https://www.stimulationclick.com', // 你需要替换这个值
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 