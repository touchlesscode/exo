import {
  Button as StitchesButton,
  type IButtonProperties,
} from '@touchless/ui-react-stitches'

const Button = ({
  children,
  ...properties
}: IButtonProperties): JSX.Element => {
  return <StitchesButton {...properties}>{children}</StitchesButton>
}

export default Button
