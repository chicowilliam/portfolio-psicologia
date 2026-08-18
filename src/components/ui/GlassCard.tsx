import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  as?: 'article' | 'div'
}

export function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        'glass-card rounded-2xl border shadow-soft',
        hover && 'interactive-card',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
