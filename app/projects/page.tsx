'use client'

import { useState } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Star, Filter } from 'lucide-react'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'Modern e-ticaret sitesi. Ürün katalogu, sepet sistemi, ödeme entegrasyonu ve admin paneli içeren full-stack uygulama.',
      longDescription: 'Next.js ve TypeScript kullanarak geliştirdiğim modern e-ticaret platformu. Prisma ORM ile PostgreSQL veritabanı, Stripe ödeme entegrasyonu ve responsive tasarım özellikleri içeriyor.',
      image: '/images/project-ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/beratergun/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      category: 'web',
      featured: true,
      status: 'Tamamlandı'
    },
    {
      id: 2,
      title: 'Görev Yönetim Uygulaması',
      description: 'Flutter ile geliştirilen mobil görev takip uygulaması. Offline çalışma, senkronizasyon ve bildirim özellikleri.',
      longDescription: 'Flutter ve Dart kullanarak geliştirdiğim cross-platform mobil uygulama. Riverpod state management, Hive local database ve Firebase backend entegrasyonu.',
      image: '/images/project-taskapp.jpg',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Hive', 'Push Notifications'],
      githubUrl: 'https://github.com/beratergun/task-manager-flutter',
      category: 'mobile',
      featured: true,
      status: 'Geliştiriliyor'
    },
    {
      id: 3,
      title: 'Kişisel Blog Sistemi',
      description: 'MDX destekli blog sitesi. SEO optimizasyonu, dark mode ve dinamik içerik yönetimi özellikleri.',
      longDescription: 'Next.js 14 App Router kullanarak geliştirdiğim blog platformu. MDX ile markdown desteği, syntax highlighting ve otomatik SEO optimizasyonu.',
      image: '/images/project-blog.jpg',
      technologies: ['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/beratergun/personal-blog',
      liveUrl: 'https://berat-blog.vercel.app',
      category: 'web',
      featured: true,
      status: 'Tamamlandı'
    },
    {
      id: 4,
      title: 'Hava Durumu Uygulaması',
      description: 'OpenWeatherMap API entegrasyonu ile çalışan Flutter uygulaması. 5 günlük hava durumu tahmini.',
      longDescription: 'Flutter ve BLoC pattern kullanarak geliştirdiğim hava durumu uygulaması. Lokasyon servisleri, API entegrasyonu ve modern UI tasarımı.',
      image: '/images/project-weather.jpg',
      technologies: ['Flutter', 'BLoC', 'REST API', 'Geolocator'],
      githubUrl: 'https://github.com/beratergun/weather-app',
      category: 'mobile',
      featured: false,
      status: 'Tamamlandı'
    },
    {
      id: 5,
      title: 'URL Kısaltma Servisi',
      description: 'Link kısaltma servisi - Next.js ve MongoDB ile geliştirilen full-stack web uygulaması.',
      longDescription: 'Next.js API routes ve MongoDB kullanarak geliştirdiğim URL shortener servisi. QR kod oluşturma, link analitikleri ve özel domain desteği.',
      image: '/images/project-url.jpg',
      technologies: ['Next.js', 'MongoDB', 'TypeScript', 'Chart.js'],
      githubUrl: 'https://github.com/beratergun/url-shortener',
      liveUrl: 'https://short-url-demo.vercel.app',
      category: 'web',
      featured: false,
      status: 'Tamamlandı'
    },
    {
      id: 6,
      title: 'Harcama Takip Uygulaması',
      description: 'Kişisel finans yönetimi için React ile geliştirilen web uygulaması. Grafik analizi ve bütçe takibi.',
      longDescription: 'React ve Chart.js kullanarak geliştirdiğim kişisel finans uygulaması. Local storage ile veri saklama, kategori bazlı harcama analizi.',
      image: '/images/project-expense.jpg',
      technologies: ['React', 'Chart.js', 'Local Storage', 'CSS3'],
      githubUrl: 'https://github.com/beratergun/expense-tracker',
      liveUrl: 'https://expense-tracker-demo.netlify.app',
      category: 'web',
      featured: false,
      status: 'Tamamlandı'
    }
  ]

  const categories = [
    { id: 'all', name: 'Tümü', count: projects.length },
    { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projelerim
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Web ve mobil uygulamalar geliştirirken kullandığım teknolojiler ve projelerim
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Star className="w-5 h-5" />
              <span>{featuredProjects.length} öne çıkan proje</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <Globe className="w-5 h-5" />
              <span>{projects.filter(p => p.category === 'web').length} web projesi</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
              <Smartphone className="w-5 h-5" />
              <span>{projects.filter(p => p.category === 'mobile').length} mobil proje</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300 font-medium">Filtrele:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  {project.category === 'web' ? (
                    <Globe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-600 dark:text-blue-400 opacity-50" />
                  ) : (
                    <Smartphone className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-600 dark:text-purple-400 opacity-50" />
                  )}
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'web' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {project.category === 'web' ? 'Web App' : 'Mobile App'}
                    </span>
                    
                    {project.featured && (
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Öne Çıkan
                      </span>
                    )}
                  </div>

                  {/* Status */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Tamamlandı'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Bu kategoride proje bulunamadı.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Benzer Bir Proje İstiyorsunuz?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Size özel web sitesi veya mobil uygulama geliştirmek için benimle iletişime geçin
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Proje Teklifi Al
          </a>
        </div>
      </section>
    </div>
  )
}