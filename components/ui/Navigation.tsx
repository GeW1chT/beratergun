'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Navigation({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav
      className={cn('flex items-center justify-between p-4', className)}
      {...props}
    >
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Berat Ergün
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <NavLink href="/projects">Projeler</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/about">Hakkımda</NavLink>
        <NavLink href="/contact">İletişim</NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <NavLink href="/projects" onClick={() => setIsOpen(false)}>Projeler</NavLink>
            <NavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink href="/about" onClick={() => setIsOpen(false)}>Hakkımda</NavLink>
            <NavLink href="/contact" onClick={() => setIsOpen(false)}>İletişim</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, ...props }: { href: string; children: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      {...props}
    >
      {children}
    </Link>
  )
}