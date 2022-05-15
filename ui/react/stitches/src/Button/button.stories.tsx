import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonForStory } from './button'

export const Playground: ComponentStory<typeof ButtonForStory> = (
  arguments_
) => <ButtonForStory {...arguments_} />

Playground.args = {
  children: 'Button',
  type: 'button',
  variant: 'primary',
  size: 'md',
  radius: 'sm',
}

export default {
  title: 'Atoms/Button',
  component: ButtonForStory,
} as ComponentMeta<typeof ButtonForStory>
