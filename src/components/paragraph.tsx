import React from 'react'

type Props = {
  children: React.ReactNode
}

const Paragraph = ({children}: Props) => {
  return ( 
    <p className='text-base text-gray-500 my-6 tracking-normal leading-9'>{children}</p>  
  )
}

export default Paragraph
