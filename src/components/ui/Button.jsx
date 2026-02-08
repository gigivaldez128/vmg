import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

    const variants = {
        primary: 'bg-primary text-white hover:bg-blue-600 focus:ring-primary',
        secondary: 'bg-surface text-text-primary hover:bg-neutral-800 border border-white/10 focus:ring-surface',
        ghost: 'bg-transparent hover:bg-white/5 text-text-primary focus:ring-white/20',
        outline: 'bg-transparent border border-white/20 text-text-primary hover:bg-white/5 focus:ring-white/20',
    };

    const sizes = {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10',
    };

    const cn = (...inputs) => twMerge(clsx(inputs));

    return (
        <button
            ref={ref}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };
