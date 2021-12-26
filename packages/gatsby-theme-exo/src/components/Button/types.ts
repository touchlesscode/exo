import { ButtonProps as BtnProps, ThemeUIStyleObject } from 'theme-ui';

interface ButtonCommonProps extends BtnProps {
  sx?: ThemeUIStyleObject;
}

type ButtonDependentProps =
  | {
      Icon?: React.FC<React.HTMLAttributes<HTMLElement>>;
      iconYPosition?: never;
      iconXPosition?: never;
      iconWidth?: never;
      iconHeight?: never;
      space?: never;
    }
  | {
      Icon: React.FC<React.HTMLAttributes<HTMLDivElement>>;
      iconYPosition?: 'start' | 'center' | 'end';
      iconXPosition?: 'left' | 'right';
      iconWidth?: string;
      iconHeight?: string;
      space?: string;
    };

type ButtonProps = ButtonCommonProps & ButtonDependentProps;

export default ButtonProps;
