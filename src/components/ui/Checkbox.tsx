import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id ?? props.name

    return (
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'mt-1 size-4 shrink-0 rounded border-border text-primary accent-primary',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              className,
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            {...props}
          />
          <label htmlFor={checkboxId} className="text-sm leading-[1.7] text-foreground/92">
            {label}
          </label>
        </div>
        {error && (
          <p id={`${checkboxId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
