import React from 'react'

interface HeadingProperties {
  children: React.ReactNode
}

const Heading: React.FC<HeadingProperties> = ({ children }) => {
  return <h1>{children || 'Heading'}</h1>
}

export default Heading
