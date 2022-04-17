import { Button } from '@touchless/react'
import React from 'react'

interface PageProperties {
  name?: string
}
const Page = ({ name = 'Exo Theme' }: PageProperties) => {
  return (
    <div>
      <h1>Hello from gatsby-theme-exo</h1>
      <Button type='button'>{name}</Button>
    </div>
  )
}

export default Page
