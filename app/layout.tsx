import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Berat Ergün - Full Stack Developer',
  description: 'Next.js ve Flutter ile modern web ve mobil uygulamalar geliştiriyorum.',
  keywords: ['Next.js', 'TypeScript', 'Flutter', 'Full Stack Developer', 'Web Development'],
  authors: [{ name: 'Berat Ergün' }],
  openGraph: {
    title: 'Berat Ergün - Full Stack Developer',
    description: 'Next.js ve Flutter ile modern web ve mobil uygulamalar geliştiriyorum.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}