'use client'

import { useState } from 'react'
import { ExternalLink, Github, Smartphone, Globe, Star, Filter } from 'lucide-react'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Üsküdar İcadiye Spor',
      description: 'Üsküdar İcadiye Spor kulübü için tasarlanmış modern web sitesi.',
      longDescription: 'TypeScript, JavaScript ve CSS teknolojileri kullanılarak geliştirilmiş, kulüp hakkında bilgi veren ve etkinlikleri duyuran bir web sitesi.',
      image: '/images/project-uskudar.jpg',
      technologies: ['TypeScript', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/GeW1chT/uskudar-icadiyespor',
      liveUrl: 'https://uskudar-icadiyespor.vercel.app',
      category: 'web',
      featured: true,
      status: 'Tamamlandı'
    },
    {
      id: 2,
      title: 'Ortakya',
      description: 'Next.js ile geliştirilen gerçek zamanlı sosyal medya platformu.',
      longDescription: 'JavaScript, TypeScript ve CSS teknolojileri ile geliştirilen "Ortakya", gerçek zamanlı içerik paylaşımı ve etkileşim imkanı sunan bir platformdur.',
      image: '/images/project-ortakya.jpg',
      technologies: ['Next.js', 'JavaScript', 'TypeScript', 'CSS'],
      githubUrl: 'https://github.com/GeW1chT/ortakya',
      liveUrl: null,
      category: 'web',
      featured: false,
      status: 'Geliştiriliyor'
    },
    {
      id: 3,
      title: 'CVerly',
      description: 'Modern ve profesyonel CV’ler oluşturabileceğiniz web sitesi.',
      longDescription: 'TypeScript ve CSS ağırlıklı olarak geliştirilen "CVerly", kullanıcıların kolayca modern ve şık özgeçmişler hazırlamasına olanak tanır.',
      image: '/images/project-cverly.jpg',
      technologies: ['TypeScript', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/GeW1chT/CVerly',
      liveUrl: 'https://cverly.vercel.app',
      category: 'web',
      featured: true,
      status: 'Tamamlandı'
    },
    {
      id: 4,
      title: 'Mizan Yönetim Uygulaması',
      description: 'Mizan yönetim paneli için geliştirilen bir mobil uygulama.',
      longDescription: 'Dart ve diğer teknolojiler kullanılarak mobil platformlar için hayata geçirilen bu uygulama, yönetim paneli işlemlerinin mobil cihaz üzerinden takibini sağlar.',
      image: '/images/project-mizan.jpg',
      technologies: ['Dart', 'C++', 'CMake'],
      githubUrl: 'https://github.com/GeW1chT/mizan_yonetim_app',
      liveUrl: null,
      category: 'mobile',
      featured: true,
      status: 'Tamamlandı'
    },
    {
      id: 5,
      title: 'Logomania',
      description: 'Futbol, basketbol gibi spor dallarının logolarını tahmin etmeye dayalı mobil oyun.',
      longDescription: 'Dart ve çeşitli teknolojilerle geliştirilen "Logomania", eğlenceli ve interaktif bir mobil deneyim sunar.',
      image: '/images/project-logomania.jpg',
      technologies: ['Dart', 'C++', 'CMake', 'Swift'],
      githubUrl: 'https://github.com/GeW1chT/logomania',
      liveUrl: null,
      category: 'mobile',
      featured: true,
      status: 'Tamamlandı'
    },
    {
      id: 6,
      title: 'Yemek Tarifi Uygulaması',
      description: 'Çeşitli yemek tariflerini içeren bir mobil uygulama.',
      longDescription: 'JavaScript ile geliştirilen bu uygulama, kullanıcılara farklı yemek tariflerine kolayca erişim imkanı sunar.',
      image: '/images/project-yemek.jpg',
      technologies: ['JavaScript'],
      githubUrl: 'https://github.com/GeW1chT/yemektarifi-uygulamasi',
      liveUrl: null,
      category: 'mobile',
      featured: false,
      status: 'Tamamlandı'
    },
    {
      id: 7,
      title: 'OBS Ticaret',
      description: 'Ticaret Üniversitesi öğrenci-akademisyen bilgi sistemi için alternatif bir uygulama.',
      longDescription: 'Java programlama dili ile geliştirilen bu proje, öğrencilerin ve akademisyenlerin okul sistemine mobil bir arayüz üzerinden erişmesini sağlar.',
      image: '/images/project-obs.jpg',
      technologies: ['Java'],
      githubUrl: 'https://github.com/GeW1chT/Obs_Ticaret',
      liveUrl: null,
      category: 'mobile',
      featured: true,
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