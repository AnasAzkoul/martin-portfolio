import React from 'react'

type Props = {
  children: React.ReactNode
}

const SectionTitle = ({children}: Props) => {
  return (
    <h2 className='text-2xl text-secondary font-semibold'>{children}</h2>
  )
}

export default SectionTitle
