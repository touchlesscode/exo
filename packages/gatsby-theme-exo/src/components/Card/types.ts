import { ThemeUIStyleObject } from 'theme-ui';

export type ExpendToType = {
  width: string;
  height: string;
  left: string;
  top: string;
  transform: never;
};

interface CardCommonProps {
  variant?: string;
  bgColor?: string;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
  sx?: ThemeUIStyleObject;
  boxShadow?: string;
  bgImage?: string | undefined;
  bgOverlay?: string;
  expendTo?: ExpendToType;
}

type events =
  | {
      expendable?: never;
      expended?: never;
      onClick?: never;
      onClose?: never;
      duration?: never;
      timingFunc?: never;
    }
  | {
      expendable?: boolean;
      expended: boolean;
      onClick: React.MouseEventHandler<HTMLDivElement>;
      onClose: React.MouseEventHandler<HTMLButtonElement>;
      duration?: number;
      timingFunc?: string;
    };

export type CardProps = CardCommonProps & events;
export type TransitionType = {
  duration?: number;
  timingFunc?: string;
};
