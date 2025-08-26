import { blogPosts } from '@/lib/blogData'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Tag } from 'lucide-react'

// Dinamik yollar için statik parametreler oluşturun
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-800">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="flex justify-center items-center flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <span className="mx-1">•</span>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {post.description}
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {/* Blog içeriği */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  )
}