import { cn } from '@/lib/utils'

export type SectionFadeVariant =
  | 'ink-to-mist'
  | 'mist-to-blush'
  | 'blush-to-mist'
  | 'mist-to-cta'
  | 'cta-to-mist'
  | 'mist-to-ink'

interface SectionDividerProps {
  variant?: SectionFadeVariant
  className?: string
}

export function SectionDivider({
  variant = 'mist-to-blush',
  className,
}: SectionDividerProps) {
  return (
    <div
      className={cn('section-fade', `section-fade--${variant}`, className)}
      aria-hidden="true"
    />
  )
}
