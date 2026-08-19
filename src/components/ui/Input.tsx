import { forwardRef } from 'react'
import type { IconComponent } from '@/lib/icons'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  icon?: IconComponent
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon: Icon, id, ...props }, ref) => {
    const inputId = id ?? props.name

    return (
      <div className="group space-y-2">
        <label
          htmlFor={inputId}
          className="block text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-foreground/88 transition-[color] duration-200 group-focus-within:text-primary"
        >
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <Icon
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
              aria-hidden="true"
            />
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-xl border border-border bg-card py-3 text-[0.98rem] leading-relaxed text-foreground sm:text-[1rem]',
              Icon ? 'pl-11 pr-4' : 'px-4',
              'placeholder:text-muted-foreground/70',
              'transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              error && 'field-error-shake border-error focus-visible:ring-error',
              className,
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="field-error-animate text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
