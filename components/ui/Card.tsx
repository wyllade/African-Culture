'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      onClick={onClick}
      className={cn(
        'rounded-2xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-white/20 dark:border-stone-700/50 overflow-hidden transition-shadow',
        hover && 'cursor-pointer hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 dark:hover:border-primary/40',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('relative h-48 overflow-hidden', className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-5', className)}>{children}</div>
}
