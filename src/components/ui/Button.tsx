import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { MagneticWrapper } from '@/components/ui/MagneticWrapper'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  magnetic?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft',
  secondary:
    'bg-muted text-foreground hover:bg-border/60 border border-border',
  ghost: 'text-foreground hover:bg-muted/80',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      magnetic = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const button = (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
          'transition-[transform,background-color,color,opacity] duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          'motion-safe-hover hover:scale-[1.02] active:scale-[0.98]',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span
              className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
            <span>Enviando...</span>
          </>
        ) : (
          children
        )}
      </button>
    )

    if (magnetic && !disabled && !isLoading) {
      return (
        <MagneticWrapper className="inline-flex max-sm:pointer-events-auto">
          {button}
        </MagneticWrapper>
      )
    }

    return button
  },
)

Button.displayName = 'Button'
