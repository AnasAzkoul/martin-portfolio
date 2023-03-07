import React from 'react'

type Props = {
  children: React.ReactNode
  pProps?: React.HTMLProps<HTMLParagraphElement>
}

const Paragraph: React.FC<Props> = ({children, pProps}: Props) => {
  return (
    <p
      {...pProps!}
      className={`text-base text-gray-500 font-montserrat my-6 tracking-normal leading-6 ${pProps?.className}`}
    >
      {children}
      </p>  
  )
}

export default Paragraph
