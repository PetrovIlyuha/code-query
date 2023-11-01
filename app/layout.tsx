import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import React from 'react'

import { ThemeProvider } from '@/context/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'CodeQuery',
  description:
    'CodeQuery is the ultimate Q&A platform, designed to foster trust among seasoned developers while warmly welcoming beginners on their coding journey. Find expert answers, guidance, and a supportive community to empower your programming success.',
  icons: {
    icon: '/assets/images/site_logo.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${grotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500'
            }
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
