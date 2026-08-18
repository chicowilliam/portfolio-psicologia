import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        isCenter && 'section-heading-center',
      )}
    >
      {eyebrow && (
        <p className="editorial-eyebrow mb-4">
          <span className="editorial-eyebrow-line" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
      )}
      <h2 className="section-title font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
        {title}
        {titleAccent && (
          <span className="mt-1 block font-display text-[clamp(1.35rem,3vw,1.75rem)] font-normal italic text-primary/90">
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
