import React, { forwardRef } from 'react';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        {...props}
        className={`text-base text-gray-500 font-montserrat my-2 tracking-normal leading-6 ${className}`}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
