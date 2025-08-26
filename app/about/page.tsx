import { Code, Smartphone, Globe, Coffee, Heart, Star, Calendar, MapPin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Backend & Tools',
      icon: Code,
      technologies: ['Node.js', 'Git', 'GitHub', 'Vercel', 'Figma', 'VS Code'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Flutter Developer',
      duration: 'Ocak 2024 - Devam Ediyor',
      description: 'Mobil uygulama geliştirme, kullanıcı deneyimi optimizasyonu, Firebase entegrasyonu.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      current: true
    },
    {
      company: 'Freelance Projeler',
      position: 'Full Stack Developer', 
      duration: 'Eylül 2023 - Devam Ediyor',
      description: 'Next.js ve Flutter teknolojileri ile web ve mobil uygulama geliştirme.',
      technologies: ['Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS'],
      current: true
    }
  ]

  const personalInfo = [
    { icon: MapPin, label: 'Konum', value: 'İstanbul, Türkiye' },
    { icon: Calendar, label: 'Yaş', value: '19' },
    { icon: Mail, label: 'Email', value: 'beratmurat1453@gmail.com' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <img 
                src="/images/profile.jpg" 
                alt="Berat Ergün"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ben <span className="gradient-text">Berat Ergün</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer & Flutter Enthusiast
            </p>
            
            {/* Kişisel Bilgiler */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {personalInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium">{info.label}:</span>
                    <span>{info.value}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Benimle İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hikayem */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Hikayem
          </h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Yazılım geliştirme dünyasına olan tutkum üniversite yıllarımda başladı. 
              İlk kodlarımı yazarken hissettiğim o heyecan, bugün hala aynı şiddetle yanıyor. 
              Teknolojinin hayatımızı nasıl şekillendirdiğini görmenin ve bu değişime katkıda 
              bulunmanın büyüsüne kapıldım.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Üniversite eğitimim boyunca çeşitli projeler geliştirdim ve farklı teknolojilerle 
              deneyimler kazandım. Web geliştirmeden mobil uygulamalara kadar geniş bir yelpazede 
              kendimi geliştirme fırsatı buldum. Özellikle <strong className="text-blue-600 dark:text-blue-400">React </strong> 
              ve <strong className="text-purple-600 dark:text-purple-400">Flutter</strong> teknolojilerine olan ilgim, 
              kariyer yolumu şekillendirdi.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Mezun olduktan sonra bir şirkette Flutter Developer olarak çalışmaya başladım. 
              Burada gerçek dünya projeleri üzerinde çalışma deneyimi kazandım ve takım 
              çalışmasının önemini anladım. Aynı zamanda freelance projeler alarak farklı 
              müşterilerle çalışma imkanı buldum.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 italic">
                "Her yeni projede kendimi geliştirme ve yeni şeyler öğrenme fırsatı buluyorum. 
                Teknoloji sürekli gelişen bir alan ve ben de bu gelişimin parçası olmak istiyorum."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deneyimler */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Deneyimlerim
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    {exp.current && (
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Aktif
                      </span>
                    )}
                    <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Becerilerim */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Teknik Becerilerim
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {skillGroup.technologies.map((tech) => (
                      <div key={tech} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Birlikte Çalışalım
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Projelerinizde size yardımcı olmaktan mutluluk duyarım
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              İletişime Geç
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-transparent text-white border-2 border-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Projelerime Bak
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}