import { cn } from '@/lib/utils'

type PaperVariant = 'sheet' | 'note' | 'frame'

interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  as?: 'article' | 'div'
  variant?: PaperVariant
}

export function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = 'div',
  variant = 'sheet',
  ...props
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        variant === 'frame' ? 'paper-frame' : 'paper-card',
        variant === 'note' && 'paper-note',
        hover && variant !== 'frame' && 'interactive-card',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
