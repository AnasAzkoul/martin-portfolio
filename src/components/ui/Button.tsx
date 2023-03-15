import React, {forwardRef} from 'react'; 
import {VariantProps, cva} from 'class-variance-authority';

import {cn} from '@/lib/helpers/utils';

export const buttonVariants = cva('btn',
  {
    variants: {
      variant: {
        default:'btn-primary',
        outlined: 'btn-outline',
      },
      size: {
        default: 'w-40 text-sm px-6 py-2',
        md: 'w-44 text-base px-8 py-3', 
        lg: 'w-48 text-lg px-10 py-4'
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, children, variant, size, fullWidth, ...props}, ref) => {
    
    return (
      <button
        className={cn(buttonVariants({variant, size, className, fullWidth}))} {...props}
        ref={ref}
      >  
        {children}
      </button>
    );
});

Button.displayName = 'Button'
  
export default Button
