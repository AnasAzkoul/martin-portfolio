import React, {useEffect, useState} from 'react'

type Props = {
  children: React.ReactNode, 
  id: string
}


const PageSection = ({children, id}: Props) => {
  
  return (
    <div className='pt-10' id={id}>
      <section className='w-full'>
        <div className='px-6 py-16 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mt-10'>
          {children}
        </div>
      </section>
    </div>
  );
}

export default PageSection
