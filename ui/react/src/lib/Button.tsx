import React from 'react'

interface ButtonProperties {
  type: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
}
const Button: React.FC<ButtonProperties> = ({
  type = 'button',
  children = 'Button',
}) => {
  return (
    <button
      style={{
        background: '#000',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textTransform: 'capitalize',
      }}
      type={type}
    >
      {children || type}
    </button>
  )
}
Button.defaultProps = {
  children: 'Button',
}
export default Button
