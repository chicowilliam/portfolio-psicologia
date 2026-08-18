import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id ?? props.name

    return (
      <div className="space-y-2">
        <label htmlFor={textareaId} className="block text-sm font-medium text-foreground">
          {label}
        </label>
        {hint && (
          <p id={`${textareaId}-hint`} className="text-sm text-muted-foreground">
            {hint}
          </p>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'min-h-28 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-foreground',
            'placeholder:text-muted-foreground/70',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            error && 'border-error focus-visible:ring-error',
            className,
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            [hint ? `${textareaId}-hint` : null, error ? `${textareaId}-error` : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
