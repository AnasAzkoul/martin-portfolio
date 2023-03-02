import React, {useEffect, useState} from 'react'

type Props = {
  children: React.ReactNode, 
  variant: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}


const setStyles = (variant: string) => {
  switch (variant) {
    case 'xs': 
      return 'mt-8'
    case 'sm': 
      return 'mt-10'
    case 'md': 
      return 'mt-16'
    case 'lg':
      return 'mt-30'
    case 'xl':
      return 'mt-40'; 
    default: 
      throw new Error('You did not pass a valid style')
  }
}


const PageSection = ({variant, children}: Props) => {
  
  return (
    <section className={`mx-auto max-w-[114rem] ${setStyles(variant)}`}>
      <div className='w-5/6 mx-auto'>
        {children}
      </div>
    </section>
  );
}

export default PageSection
