import React, {useEffect, useState} from 'react'

type Props = {
  children: React.ReactNode, 
}


const PageSection = ({children}: Props) => {
  
  return (
    <section className='w-full'>
      <div className='px-6 py-16 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'>
        {children}
      </div>
    </section>
  );
}

export default PageSection
