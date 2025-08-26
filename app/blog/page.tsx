import { Clock, Calendar, Tag, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'nextjs-typescript-baslangic',
      title: 'Next.js ve TypeScript ile Modern Web Geliştirme',
      description: 'Next.js 14 ve TypeScript kullanarak modern web uygulamaları geliştirmenin temellerini öğrenin. App Router, Server Components ve daha fazlası.',
      excerpt: 'Web geliştirme dünyası sürekli evrim geçiriyor. Next.js 14 ile birlikte gelen yenilikler ve TypeScript\'in gücünü birleştirerek nasıl modern uygulamalar geliştirebileceğimizi keşfedin...',
      date: '2024-01-15',
      readTime: '8 dakika',
      tags: ['Next.js', 'TypeScript', 'Web Development', 'React'],
      published: true,
      featured: true,
      category: 'Web Development'
    },
    {
      slug: 'flutter-state-management',
      title: 'Flutter\'da State Management: Riverpod vs BLoC',
      description: 'Flutter uygulamalarında state management için hangi yaklaşımı ne zaman kullanmalısınız? Pratik örneklerle karşılaştırma.',
      excerpt: 'Flutter uygulamaları geliştirirken karşılaştığımız en önemli kararlardan biri state management çözümü seçmektir. Bu yazıda Riverpod ve BLoC pattern\'lerini detaylı olarak karşılaştırıyoruz...',
      date: '2024-01-10',
      readTime: '12 dakika',
      tags: ['Flutter', 'State Management', 'Riverpod', 'BLoC', 'Mobile'],
      published: true,
      featured: true,
      category: 'Mobile Development'
    },
    {
      slug: 'freelance-developer-olmak',
      title: 'Yeni Mezun Olarak Freelance Developer Deneyimlerim',
      description: 'Freelance developer olarak çalışmaya başlarken karşılaştığım zorluklar, öğrendiklerim ve tavsiyelerin.',
      excerpt: 'Üniversiteden mezun olduktan sonra freelance developer olarak çalışmaya başladım. Bu süreçte neler yaşadığımı, hangi zorluklarla karşılaştığımı ve neler öğrendiğimi paylaşıyorum...',
      date: '2024-01-05',
      readTime: '6 dakika',
      tags: ['Freelance', 'Career', 'Tips', 'Personal'],
      published: true,
      featured: false,
      category: 'Career'
    },
    {
      slug: 'tailwind-css-tips',
      title: 'Tailwind CSS ile Daha Hızlı UI Geliştirme',
      description: 'Tailwind CSS kullanarak daha hızlı ve tutarlı kullanıcı arayüzleri geliştirmenin ipuçları ve püf noktaları.',
      excerpt: 'Tailwind CSS, modern web geliştirmede vazgeçilmez araçlardan biri haline geldi. Bu yazıda, Tailwind ile daha verimli çalışmanın yollarını keşfediyoruz...',
      date: '2023-12-28',
      readTime: '10 dakika',
      tags: ['Tailwind CSS', 'CSS', 'UI/UX', 'Web Design'],
      published: true,
      featured: false,
      category: 'Web Development'
    },
    {
      slug: 'firebase-flutter-integration',
      title: 'Firebase ve Flutter Entegrasyonu: Adım Adım Rehber',
      description: 'Flutter uygulamanızı Firebase ile nasıl entegre edeceğinizi, authentication, database ve cloud functions kurulumunu öğrenin.',
      excerpt: 'Firebase, mobil uygulama geliştirme sürecini hızlandıran güçlü bir platform. Bu rehberde Flutter uygulamanızı Firebase ile entegre etmenin tüm adımlarını bulacaksınız...',
      date: '2023-12-20',
      readTime: '15 dakika',
      tags: ['Firebase', 'Flutter', 'Backend', 'Authentication'],
      published: true,
      featured: false,
      category: 'Mobile Development'
    }
  ]

  const categories = [
    { name: 'Tümü', count: blogPosts.length, slug: 'all' },
    { name: 'Web Development', count: blogPosts.filter(p => p.category === 'Web Development').length, slug: 'web-development' },
    { name: 'Mobile Development', count: blogPosts.filter(p => p.category === 'Mobile Development').length, slug: 'mobile-development' },
    { name: 'Career', count: blogPosts.filter(p => p.category === 'Career').length, slug: 'career' }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Web geliştirme, mobil uygulamalar ve teknoloji hakkında yazılar
          </p>
          
          {/* İstatistikler */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Calendar className="w-5 h-5" />
              <span>{blogPosts.length} yazı</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
              <Tag className="w-5 h-5" />
              <span>{allTags.length} konu</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <Clock className="w-5 h-5" />
              <span>Düzenli güncellemeler</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-3">
            {/* Öne Çıkan Yazılar */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-1 h-6 bg-blue-600 mr-3"></span>
                  Öne Çıkan Yazılar
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post, index) => (
                    <article key={post.slug} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 card-hover">
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Öne Çıkan
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-sm">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                          Devamını Oku
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Tüm Yazılar */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-purple-600 mr-3"></span>
                Tüm Yazılar
              </h2>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <article key={post.slug} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 card-hover">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-48 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex-shrink-0 relative">
                        <div className="absolute bottom-2 left-2">
                          <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-2 py-1 rounded text-xs">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                          >
                            Oku
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Arama */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Arama
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Yazı ara..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Kategoriler */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Kategoriler
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="flex items-center justify-between p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors duration-200"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Etiketler */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Popüler Etiketler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 12).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 rounded-full text-sm transition-colors duration-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">
                  Yeni Yazılardan Haberdar Ol
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Yeni blog yazıları ve güncellemeler için email listemize katıl.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email adresiniz"
                    className="w-full px-3 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded font-medium hover:bg-gray-100 transition-colors duration-200">
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog hakkında */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Hakkında
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bu blogda web geliştirme, mobil uygulama geliştirme, yeni teknolojiler ve 
              freelance developer olarak deneyimlerimi paylaşıyorum. Amacım, öğrendiklerimi 
              toplulukla paylaşmak ve birlikte büyümek.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}