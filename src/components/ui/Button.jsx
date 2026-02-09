import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none ring-offset-background min-h-[44px]';

    const variants = {
        primary: 'bg-primary text-white hover:bg-blue-600 focus:ring-primary',
        secondary: 'bg-surface text-text-primary hover:bg-neutral-800 border border-white/10 focus:ring-surface',
        ghost: 'bg-transparent hover:bg-white/5 text-text-primary focus:ring-white/20',
        outline: 'bg-transparent border border-white/20 text-text-primary hover:bg-white/5 focus:ring-white/20',
    };

    const sizes = {
        default: 'h-11 py-2 px-4 min-h-[44px]',
        sm: 'h-10 min-h-[44px] px-4 text-sm',
        lg: 'h-12 min-h-[48px] px-6 text-base md:text-lg',
        icon: 'h-11 w-11 min-h-[44px] min-w-[44px]',
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
