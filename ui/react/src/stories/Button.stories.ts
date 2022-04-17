import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import Button from '../lib/Button'

const meta: ComponentMeta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
}
export default meta

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    children: 'test',
    type: 'submit',
  },
}
