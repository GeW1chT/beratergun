'use client'

import { ExternalLink, Github, Smartphone, Globe, Star } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  // Bu veriyi sonra lib/data.ts'den çekebilirsin
  const featuredProjects = [
    {
      id: 1,
      title: 'Üsküdar İcadiye Spor',
      description: 'Üsküdar İcadiye Spor kulübü için tasarlanmış modern web sitesi.',
      image: '/images/project-uskudar.jpg',
      technologies: ['TypeScript', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/GeW1chT/uskudar-icadiyespor',
      liveUrl: 'https://uskudar-icadiyespor.vercel.app',
      type: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Ortakya',
      description: 'Next.js ile geliştirilen gerçek zamanlı sosyal medya platformu.',
      image: '/images/project-ortakya.jpg',
      technologies: ['Next.js', 'JavaScript', 'TypeScript', 'CSS'],
      githubUrl: 'https://github.com/GeW1chT/ortakya',
      liveUrl: null,
      type: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'CVerly',
      description: 'Modern ve profesyonel CV’ler oluşturabileceğiniz web sitesi.',
      image: '/images/project-cverly.jpg',
      technologies: ['TypeScript', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/GeW1chT/CVerly',
      liveUrl: 'https://cverly.vercel.app',
      type: 'web',
      featured: true
    }
  ]

  const otherProjects = [
    {
      title: 'Mizan Yönetim Uygulaması',
      description: 'Mizan yönetim paneli için geliştirilen bir mobil uygulama.',
      technologies: ['Dart', 'C++', 'CMake'],
      githubUrl: 'https://github.com/GeW1chT/mizan_yonetim_app'
    },
    {
      title: 'Logomania',
      description: 'Futbol, basketbol gibi spor dallarının logolarını tahmin etmeye dayalı mobil oyun.',
      technologies: ['Dart', 'C++', 'CMake', 'Swift'],
      githubUrl: 'https://github.com/GeW1chT/logomania'
    },
    {
      title: 'OBS Ticaret',
      description: 'Ticaret Üniversitesi öğrenci-akademisyen bilgi sistemi için alternatif bir uygulama.',
      technologies: ['Java'],
      githubUrl: 'https://github.com/GeW1chT/Obs_Ticaret'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projelerim
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Geliştirdiğim web ve mobil uygulamalar. Her proje farklı teknolojiler ve yaklaşımlar içeriyor.
          </p>
        </div>

        {/* Öne Çıkan Projeler */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-500" />
            Öne Çıkan Projeler
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 card-hover"
              >
                {/* Proje Görseli */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {project.type === 'web' ? (
                    <Globe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-600 dark:text-blue-400 opacity-50" />
                  ) : (
                    <Smartphone className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-600 dark:text-purple-400 opacity-50" />
                  )}
                  
                  {/* Proje Tipi Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === 'web' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {project.type === 'web' ? 'Web App' : 'Mobile App'}
                    </span>
                  </div>
                </div>

                {/* Proje İçeriği */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Teknolojiler */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Linkler */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Canlı Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diğer Projeler */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Diğer Projeler
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 card-hover"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub'da Görüntüle
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Yeni Projeler İçin İşbirliği Yapalım!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Web sitesi, mobil uygulama veya mevcut projenizin geliştirilmesi konularında yardımcı olabilirim.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Benimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}