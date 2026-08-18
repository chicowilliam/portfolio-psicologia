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
        className="flex rounded-full border border-border bg-muted/40 p-1"
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
                'min-h-11 flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
              )}
            >
              {option.label}
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
