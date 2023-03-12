import React from 'react'
import Link from 'next/link';
import clsx from 'clsx';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 

interface Props extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string
  direction: 'left' | 'right'
  children: React.ReactNode
}


const NextArticleLink = ({href, children, direction, ...props}: Props) => {
  
  const styles = clsx(
    clsx('text-secondaryLight absolute text-xl', {
      'left-0': direction === 'left', 
      'right-0': direction === 'right'
    })
  );
  
  const iconStyles = 'text-xl text-secondaryLight inline-block font-bold'
  
  return (
    <Link href={href} {...props} className={styles}>
      {direction === 'left' && (
        <BsChevronLeft className={iconStyles} />
      )}
      {children}
      {direction === 'right' && (
        <BsChevronRight className={iconStyles}/>
        )}
    </Link>
  );
}

export default NextArticleLink
