import { motion } from '@/lib/motion-react'
import { cn } from '@/lib/utils'

interface SegmentedOption<T extends string> {
  value: T
  label: string
}

interface SegmentedControlProps<T extends string> {
  name: string
  label: string
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  error?: string
}

export function SegmentedControl<T extends string>({
  name,
  label,
  options,
  value,
  onChange,
  error,
}: SegmentedControlProps<T>) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-foreground">{label}</legend>
      <div
        role="radiogroup"
        aria-label={label}
        className="flex rounded-xl border border-border bg-muted/40 p-1"
      >
        {options.map((option) => {
          const isSelected = value === option.value

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              name={name}
              onClick={() => onChange(option.value)}
              className={cn(
                'relative min-h-11 flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isSelected ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {isSelected && (
                <motion.span
                  layoutId={`${name}-segment-pill`}
                  className="absolute inset-0 rounded-lg bg-primary shadow-soft"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{option.label}</span>
            </button>
          )
        })}
      </div>
      {error && (
        <p className="field-error-animate text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}
