import React from 'react'

type Props = {
  children: React.ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button
      className='btn'
    >
      {children}
    </button>
  );
}

export default Button
