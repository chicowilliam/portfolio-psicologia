import { forwardRef } from 'react'
import type { IconComponent } from '@/lib/icons'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  hint?: string
  icon?: IconComponent
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, icon: Icon, id, ...props }, ref) => {
    const textareaId = id ?? props.name

    return (
      <div className="group space-y-2">
        <label
          htmlFor={textareaId}
          className="block text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-foreground/88 transition-[color] duration-200 group-focus-within:text-primary"
        >
          {label}
        </label>
        {hint && (
          <p id={`${textareaId}-hint`} className="text-sm leading-relaxed text-muted-foreground">
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
              'min-h-28 w-full resize-y rounded-xl border border-border bg-card py-3 text-[0.98rem] leading-relaxed text-foreground sm:text-[1rem]',
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
