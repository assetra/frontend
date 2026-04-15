'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      {
        variants: {
          variant: {
          default: 'bg-[var(--accent)] text-white hover:brightness-105 transition-all duration-300 shadow-[0_0_20px_rgba(28,214,198,0.25)] hover:shadow-[0_0_30px_rgba(28,214,198,0.35)]',
          destructive: 'bg-error-500 text-white hover:bg-error-700',
          outline: 'border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:bg-[var(--accent)]/10',
          secondary: 'bg-[var(--card)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10',
          ghost: 'text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--accent)]/10',
          link: 'text-[var(--accent)] hover:text-[var(--accent)]/80 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };