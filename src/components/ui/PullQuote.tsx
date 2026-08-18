import { cn } from '@/lib/utils'

interface PullQuoteProps {
  quote: string
  attribution?: string
  className?: string
}

export function PullQuote({ quote, attribution, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        'pull-quote relative rounded-2xl border border-border/70 bg-card/80 px-6 py-5 sm:px-8 sm:py-6',
        className,
      )}
    >
      <span className="pull-quote-mark font-display text-3xl leading-none text-primary/35" aria-hidden="true">
        &ldquo;
      </span>
      <p className="pull-quote-text font-display text-lg font-medium leading-snug text-foreground sm:text-xl">
        {quote}
      </p>
      {attribution && (
        <footer className="mt-3 text-sm text-muted-foreground">
          — {attribution}
        </footer>
      )}
    </blockquote>
  )
}
