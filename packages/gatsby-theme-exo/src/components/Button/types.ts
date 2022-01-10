import { ButtonProps as BtnProps, ThemeUIStyleObject } from 'theme-ui';

interface ButtonCommonProps extends BtnProps {
  sx?: ThemeUIStyleObject;
}

type ButtonDependentProps =
  | {
      Icon?: never;
      iconYPosition?: never;
      iconXPosition?: never;
      iconWidth?: never;
      iconHeight?: never;
      space?: never;
    }
  | {
      Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
      iconYPosition?: 'start' | 'center' | 'end';
      iconXPosition?: 'left' | 'right';
      iconWidth?: string;
      iconHeight?: string;
      space?: string;
      iconStyle?: ThemeUIStyleObject;
    };

type ButtonProps = ButtonCommonProps & ButtonDependentProps;

export default ButtonProps;
