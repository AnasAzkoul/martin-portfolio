import React from 'react'

type Props = {
  children: React.ReactNode
}

const SectionTitle = ({children}: Props) => {
  return (
    <h2 className='text-3xl text-secondary font-semibold uppercase'>{children}</h2>
  )
}

export default SectionTitle
