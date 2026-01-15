import type { Metadata } from 'next'
import { Syne, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anas Ibne Ali - Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack. Building scalable and reliable web applications.',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, JavaScript, Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-dark text-white antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
