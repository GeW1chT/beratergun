'use client'

import { Code, Smartphone, Globe, Coffee, Heart, Star } from 'lucide-react'

export default function About() {
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

  const stats = [
    { label: 'Tamamlanan Proje', value: '10+', icon: Star },
    { label: 'Kullanılan Teknoloji', value: '15+', icon: Code },
    { label: 'Kahve Tüketimi', value: '∞', icon: Coffee },
    { label: 'Kod Yazma Sevgisi', value: '100%', icon: Heart }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Beni Tanıyın
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Teknoloji tutkusu olan bir yazılımcı olarak, modern çözümler geliştirmeyi seviyorum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sol Taraf - Hikaye */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Merhaba! Ben <strong className="text-blue-600 dark:text-blue-400">Berat</strong>, 
                yazılım geliştirme dünyasına yeni adım atmış, öğrenmeye ve gelişmeye açık bir yazılımcıyım.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Şu anda bir şirkette <strong className="text-purple-600 dark:text-purple-400">Flutter Developer</strong> 
                olarak çalışıyor, mobil uygulama geliştirme konusunda deneyim kazanıyorum. Aynı zamanda 
                <strong className="text-green-600 dark:text-green-400"> Next.js ve TypeScript</strong> ile 
                web projelerine freelance olarak destek veriyorum.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Teknolojiye olan tutkum, sürekli öğrenme isteğim ve kullanıcı deneyimini ön planda tutan 
                yaklaşımımla projelerimde fark yaratmaya çalışıyorum. Her yeni projede kendimi 
                geliştirme fırsatı buluyorum.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 italic">
                  "Kod yazmak sadece problem çözmek değil, yaratıcılığını ortaya koyma sanatıdır." 💡
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Beceriler */}
          <div className="space-y-8">
            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Beceri Grupları */}
            <div className="space-y-6">
              {skills.map((skillGroup, index) => {
                const Icon = skillGroup.icon
                return (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Alt Kısım - Kişisel Bilgiler */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Freelance Projeler İçin Uygunluk
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Yeni projelere açığım! Next.js/TypeScript web siteleri, Flutter mobil uygulamaları 
              veya mevcut projelerin geliştirilmesi konularında yardımcı olabilirim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Yeni projeler için müsait</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Remote çalışmaya uygun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}