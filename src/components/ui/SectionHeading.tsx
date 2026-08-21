import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: React.ReactNode
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
        <p className="editorial-eyebrow mb-3 sm:mb-4">
          <span className="editorial-eyebrow-line" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
      )}
      <h2 className="section-title font-display text-[clamp(1.9rem,4.4vw,3.05rem)] font-semibold leading-[1.14] tracking-[-0.01em] text-foreground">
        {title}
        {titleAccent && (
          <span className="mt-1.5 block font-display text-[clamp(1.3rem,3.1vw,1.95rem)] font-normal italic text-primary-light">
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 max-w-[66ch] text-[1.02rem] leading-[1.7] text-muted-foreground sm:mt-5 sm:text-[1.09rem]">
          {description}
        </p>
      )}
    </div>
  )
}
