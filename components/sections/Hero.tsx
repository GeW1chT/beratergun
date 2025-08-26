'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    'Full Stack Developer',
    'Flutter Developer', 
    'Next.js Developer',
    'TypeScript Enthusiast'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profil Resmi */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <img 
                src="/images/profile.jpg" 
                alt="Berat Ergün"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Ana Başlık */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Merhaba, Ben{' '}
              <span className="gradient-text">Berat</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                {roles[currentRole]}
              </p>
            </div>
          </div>

          {/* Açıklama */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Modern web ve mobil uygulamalar geliştiren bir yazılımcıyım. 
              <strong className="text-blue-600 dark:text-blue-400"> Next.js, TypeScript</strong> ve 
              <strong className="text-blue-600 dark:text-blue-400"> Flutter</strong> teknolojileri ile 
              kullanıcı odaklı çözümler üretiyorum.
            </p>
            
            <p className="text-base text-gray-500 dark:text-gray-400">
              🚀 Yeni mezun • 💼 Şu an bir şirkette Flutter Developer • 🎯 Freelance projeler alıyorum
            </p>
          </div>

          {/* Teknolojiler */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              'Next.js', 'TypeScript', 'React', 'Flutter', 'Dart', 
              'Tailwind CSS', 'Node.js', 'Firebase', 'Git'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              İletişime Geç
            </Link>
            
            <a
              href="/cv-berater-gun.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              CV İndir
            </a>
          </div>

          {/* Projelerime Bak */}
          <div className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Projelerime Göz At
              <ChevronDown className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            aria-label="Aşağı kaydır"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}