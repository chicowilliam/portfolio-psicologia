import { forwardRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  hint?: string
  icon?: LucideIcon
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, icon: Icon, id, ...props }, ref) => {
    const textareaId = id ?? props.name

    return (
      <div className="group space-y-2">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-foreground transition-[color,font-weight] duration-200 group-focus-within:text-primary group-focus-within:font-semibold"
        >
          {label}
        </label>
        {hint && (
          <p id={`${textareaId}-hint`} className="text-sm text-muted-foreground">
            {hint}
          </p>
        )}
        <div className="relative">
          {Icon && (
            <Icon
              className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-muted-foreground transition-colors group-focus-within:text-primary"
              aria-hidden="true"
            />
          )}
          <textarea
            ref={ref}
            id={textareaId}
            className={cn(
              'min-h-28 w-full resize-y rounded-xl border border-border bg-card py-3 text-foreground',
              Icon ? 'pl-11 pr-4' : 'px-4',
              'placeholder:text-muted-foreground/70',
              'transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              error && 'field-error-shake border-error focus-visible:ring-error',
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
        </div>
        {error && (
          <p id={`${textareaId}-error`} className="field-error-animate text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
