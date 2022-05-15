import * as React from 'react'
import { styled } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { modifyForStory } from '@sb/type-utils'

const BaseButton = styled('button', {
  fontWeight: 700,
  background: 'transparent',
  border: 'none',
  textTransform: 'capitalize',
  padding: '1em 1.5em',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        color: 'White',
        backgroundColor: 'black',
      },
      secondary: {
        color: 'white',
        backgroundColor: 'Navy',
      },
      ghost: {
        color: 'black',
        outline: '1px solid black',
      },
    },
    size: {
      xs: {
        fontSize: '0.4em',
      },
      sm: {
        fontSize: '0.8em',
      },
      md: {
        fontSize: '1em',
      },
      lg: {
        fontSize: '1.5em',
      },
    },
    radius: {
      none: {
        borderRadius: '0em',
      },
      sm: {
        borderRadius: '0.25em',
      },
      md: {
        borderRadius: '0.5em',
      },
      lg: {
        borderRadius: '1em',
      },
      full: {
        borderRadius: '40em',
      },
      circle: {
        borderRadius: '100%',
        aspectRatio: 1,
      },
    },
    isBlock: {
      true: {
        width: '100%',
        display: 'block',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    radius: 'sm',
  },
})

type BaseButtonVariants = Stitches.VariantProps<typeof BaseButton>
export interface IButtonProperties extends BaseButtonVariants {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  css?: Stitches.CSS
  as?: React.ElementType
}

export const Button = ({
  children = 'Stitches Button',
  type = 'button',
  ...properties
}: IButtonProperties): JSX.Element => {
  return (
    <BaseButton type={type} {...properties}>
      {children}
    </BaseButton>
  )
}

export const ButtonForStory = modifyForStory<
  BaseButtonVariants,
  IButtonProperties,
  typeof BaseButton
>(Button)
