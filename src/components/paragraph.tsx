import React from 'react'

type Props = {
  children: React.ReactNode
}

const Paragraph = ({children}: Props) => {
  return ( 
    <p className='text-2xl text-gray-500 my-8 tracking-normal leading-9'>{children}</p>  
  )
}

export default Paragraph
