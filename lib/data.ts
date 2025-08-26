// Proje ve deneyim verilerin burada tanımla
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  type: 'web' | 'mobile'
  featured: boolean
  category?: string
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
  current: boolean
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
}

export interface Skill {
  category: string
  technologies: string[]
  icon: string
  color: string
}

// Projeler
export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Ticaret Platformu',
    description: 'Modern e-ticaret sitesi. Ürün katalogu, sepet sistemi, ödeme entegrasyonu ve admin paneli içeriyor.',
    image: '/images/project-ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/beratergun/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    type: 'web',
    featured: true,
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Görev Yönetim Uygulaması',
    description: 'Flutter ile geliştirilen mobil görev takip uygulaması. Offline çalışma, senkronizasyon ve bildirim özellikleri.',
    image: '/images/project-taskapp.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Hive'],
    githubUrl: 'https://github.com/beratergun/task-manager-flutter',
    type: 'mobile',
    featured: true,
    category: 'Mobile'
  },
  {
    id: 3,
    title: 'Kişisel Blog Sistemi',
    description: 'MDX destekli blog sitesi. SEO optimizasyonu, dark mode ve dinamik içerik yönetimi.',
    image: '/images/project-blog.jpg',
    technologies: ['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/beratergun/personal-blog',
    liveUrl: 'https://berater-blog.vercel.app',
    type: 'web',
    featured: true,
    category: 'Frontend'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Hava durumu API entegrasyonu ile çalışan Flutter uygulaması',
    image: '/images/project-weather.jpg',
    technologies: ['Flutter', 'REST API', 'BLoC', 'HTTP'],
    githubUrl: 'https://github.com/beratergun/weather-app',
    type: 'mobile',
    featured: false,
    category: 'Mobile'
  },
  {
    id: 5,
    title: 'URL Shortener',
    description: 'Link kısaltma servisi - Next.js ve MongoDB ile',
    image: '/images/project-url.jpg',
    technologies: ['Next.js', 'MongoDB', 'TypeScript', 'Vercel'],
    githubUrl: 'https://github.com/beratergun/url-shortener',
    liveUrl: 'https://short-url-demo.vercel.app',
    type: 'web',
    featured: false,
    category: 'Full Stack'
  },
  {
    id: 6,
    title: 'Expense Tracker',
    description: 'Kişisel harcama takip uygulaması',
    image: '/images/project-expense.jpg',
    technologies: ['React', 'Chart.js', 'Local Storage', 'CSS3'],
    githubUrl: 'https://github.com/beratergun/expense-tracker',
    liveUrl: 'https://expense-tracker-demo.netlify.app',
    type: 'web',
    featured: false,
    category: 'Frontend'
  }
]

// Deneyimler
export const experiences: Experience[] = [
  {
    company: 'TechCorp Solutions',
    position: 'Flutter Developer',
    duration: 'Ocak 2024 - Devam Ediyor',
    description: 'Mobil uygulama geliştirme, kullanıcı deneyimi optimizasyonu, Firebase entegrasyonu ve uygulama performans iyileştirmeleri üzerine çalışıyorum.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Git'],
    current: true
  },
  {
    company: 'Freelance Projeler',
    position: 'Full Stack Developer',
    duration: 'Eylül 2023 - Devam Ediyor',
    description: 'Çeşitli müşteriler için web siteleri ve küçük ölçekli mobil uygulamalar geliştiriyorum. Next.js ve Flutter teknolojilerini kullanarak modern çözümler sunuyorum.',
    technologies: ['Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'Vercel'],
    current: true
  },
  {
    company: 'Üniversite Projeleri',
    position: 'Student Developer',
    duration: '2021 - 2023',
    description: 'Üniversite eğitimim süresince çeşitli web ve mobil projeler geliştirdim. Takım çalışması ve proje yönetimi deneyimi kazandım.',
    technologies: ['JavaScript', 'Python', 'Java', 'MySQL', 'HTML/CSS'],
    current: false
  }
]

// Beceriler
export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
    icon: 'Globe',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Mobile',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'State Management', 'Android', 'iOS'],
    icon: 'Smartphone',
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Backend & Database',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'API Development'],
    icon: 'Server',
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Tools & Others',
    technologies: ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code', 'Postman', 'npm/yarn'],
    icon: 'Tool',
    color: 'from-orange-500 to-red-500'
  }
]

// Blog yazıları (yakında)
export const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-typescript-baslangic',
    title: 'Next.js ve TypeScript ile Modern Web Geliştirme',
    description: 'Next.js 14 ve TypeScript kullanarak modern web uygulamaları geliştirmenin temellerini öğrenin.',
    date: '2024-01-15',
    readTime: '8 dakika',
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    published: true
  },
  {
    slug: 'flutter-state-management',
    title: 'Flutter\'da State Management: Riverpod vs BLoC',
    description: 'Flutter uygulamalarında state management için hangi yaklaşımı ne zaman kullanmalısınız?',
    date: '2024-01-10',
    readTime: '12 dakika',
    tags: ['Flutter', 'State Management', 'Riverpod', 'BLoC'],
    published: true
  },
  {
    slug: 'freelance-developer-olmak',
    title: 'Yeni Mezun Olarak Freelance Developer Deneyimlerim',
    description: 'Freelance developer olarak çalışmaya başlarken karşılaştığım zorluklar ve öğrendiklerim.',
    date: '2024-01-05',
    readTime: '6 dakika',
    tags: ['Freelance', 'Career', 'Tips'],
    published: false
  }
]

// İstatistikler
export const stats = [
  { label: 'Tamamlanan Proje', value: projects.length },
  { label: 'Kullanılan Teknoloji', value: '15+' },
  { label: 'Memnun Müşteri', value: '8+' },
  { label: 'GitHub Commit', value: '500+' }
]

// İletişim bilgileri
export const contactInfo = {
  email: 'berat@example.com',
  phone: '+90 5XX XXX XX XX',
  location: 'İstanbul, Türkiye',
  github: 'https://github.com/beratergun',
  linkedin: 'https://linkedin.com/in/beratergun',
  twitter: 'https://twitter.com/beratergun'
}

// Hizmetler
export const services = [
  {
    title: 'Web Geliştirme',
    description: 'Next.js ve TypeScript ile modern, hızlı ve SEO uyumlu web siteleri',
    icon: 'Globe',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    price: 'Proje bazlı fiyatlandırma'
  },
  {
    title: 'Mobil Uygulama',
    description: 'Flutter ile iOS ve Android platformları için native uygulamalar',
    icon: 'Smartphone',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    price: 'Proje bazlı fiyatlandırma'
  },
  {
    title: 'Mevcut Proje Güncellemesi',
    description: 'Var olan projelerin geliştirilmesi, hata düzeltmesi ve yeni özellik ekleme',
    icon: 'RefreshCw',
    technologies: ['Çeşitli teknolojiler'],
    price: 'Saatlik ücretlendirme'
  },
  {
    title: 'Teknik Danışmanlık',
    description: 'Teknoloji seçimi, mimari kararlar ve en iyi pratikler konularında danışmanlık',
    icon: 'MessageCircle',
    technologies: ['Strateji', 'Planlama', 'İnceleme'],
    price: 'Görüşme bazlı'
  }
]