import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  href?: string
  external?: boolean
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export function buttonClassName({
  variant = 'primary',
  size = 'md',
  className,
  isLoading,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  isLoading?: boolean
}) {
  return cn(
    'btn',
    variant === 'primary' && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'ghost' && 'btn-ghost',
    variant === 'outline' && 'btn-outline',
    sizeStyles[size],
    isLoading && 'btn-loading',
    className,
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      href,
      external,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = buttonClassName({ variant, size, className, isLoading })

    const content = isLoading ? (
      <>
        <span className="btn-spinner" aria-hidden="true" />
        <span>Enviando...</span>
      </>
    ) : (
      children
    )

    if (href && !disabled && !isLoading) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={classes}
        {...props}
      >
        {content}
      </button>
    )
  },
)

Button.displayName = 'Button'
