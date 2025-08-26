'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımda', href: '/about' },
    { name: 'Projeler', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/contact' }
  ]

  const services = [
    { name: 'Web Geliştirme', href: '/services/web' },
    { name: 'Mobil Uygulama', href: '/services/mobile' },
    { name: 'UI/UX Tasarım', href: '/services/design' },
    { name: 'Danışmanlık', href: '/services/consultation' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/GeW1chT', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/berat-erg%C3%BCn-1b4269258/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:beratmurat1453@gmail.com', label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ana Footer İçeriği */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BG</span>
              </div>
              <span className="font-bold text-xl">Berat Ergün</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Modern web ve mobil uygulamalar geliştiren full-stack developer. 
              Next.js, TypeScript ve Flutter teknolojileri ile kullanıcı odaklı çözümler üretiyorum.
            </p>

            {/* Sosyal Medya Linkleri */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-gray-800"></div>

        {/* Footer Alt Kısmı */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Telif Hakkı */}
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Berat Ergün. </span>
            <span className="flex items-center ml-1">
              Türkiye'den <Heart className="w-4 h-4 text-red-500 mx-1" /> ile yapıldı
            </span>
          </div>

          {/* Yukarı Çık Butonu */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            Yukarı Çık
            <ArrowUp className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Freelance Durumu */}
        <div className="pb-6">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-4 rounded-lg border border-blue-800">
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-gray-300">
                <strong className="text-white">Freelance projelere açık</strong> - 
                Yeni projeler için benimle iletişime geçebilirsiniz
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}