import React from 'react'
import * as classes from './Wrap.module.css'

const Wrap = ({ children, className }) => {
  return (
    <div
      className={`w-full ${classes.wrap} px-24 md:px-24 mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export default Wrap
