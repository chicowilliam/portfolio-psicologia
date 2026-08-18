import { cn } from '@/lib/utils'

interface RadioOption<T extends string> {
  value: T
  label: string
}

interface RadioGroupProps<T extends string> {
  name: string
  label: string
  options: RadioOption<T>[]
  value: T
  onChange: (value: T) => void
  error?: string
}

export function RadioGroup<T extends string>({
  name,
  label,
  options,
  value,
  onChange,
  error,
}: RadioGroupProps<T>) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-foreground">{label}</legend>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const id = `${name}-${option.value}`
          const isSelected = value === option.value

          return (
            <label
              key={option.value}
              htmlFor={id}
              className={cn(
                'flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-3 text-sm transition-colors duration-200',
                isSelected
                  ? 'border-primary bg-primary/8 text-primary'
                  : 'border-border bg-card text-foreground hover:border-primary/25 hover:bg-muted/40',
              )}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={() => onChange(option.value)}
                className="size-4 accent-primary"
              />
              {option.label}
            </label>
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

interface MultiSelectProps<T extends string> {
  label: string
  options: RadioOption<T>[]
  values: T[]
  onChange: (values: T[]) => void
  error?: string
}

export function MultiSelect<T extends string>({
  label,
  options,
  values,
  onChange,
  error,
}: MultiSelectProps<T>) {
  function toggle(value: T) {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value))
    } else {
      onChange([...values, value])
    }
  }

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-foreground">{label}</legend>
      <div className="flex flex-wrap gap-3" role="group" aria-label={label}>
        {options.map((option) => {
          const isSelected = values.includes(option.value)

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggle(option.value)}
              aria-pressed={isSelected}
              aria-label={`${option.label}${isSelected ? ', selecionado' : ''}`}
              className={cn(
                'min-h-11 rounded-full border px-4 py-2.5 text-sm transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                isSelected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:border-primary/30 hover:bg-muted/50',
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
