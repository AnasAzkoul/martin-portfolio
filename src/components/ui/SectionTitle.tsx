import React, { forwardRef } from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ children, className }, ref) => {
    return (
      <h2
        className={`font-bold text-2xl text-secondary  uppercase ${className}`}
      >
        {children}
      </h2>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
