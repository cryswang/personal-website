import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

type ButtonVariant = 'primary' | 'secondary'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent',
  secondary: 'bg-secondary',
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: {
  variant?: ButtonVariant
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        'w-fit px-5 py-2 rounded-[8px] border border-foreground shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-foreground transition-[transform,box-shadow] duration-100 active:translate-y-[2px] active:shadow-none',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
