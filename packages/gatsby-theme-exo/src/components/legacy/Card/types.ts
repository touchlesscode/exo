import { BoundingClientRecType } from '@exoTheme/types/index';
import { ThemeUIStyleObject, CardProps as ThemeCardProps } from 'theme-ui';

export type ExpendToType = {
  width?: string;
  height?: string;
  left?: string;
  top?: string;
  transform?: never;
};

interface CardCommonProps extends ThemeCardProps {
  variant?: string;
  bgImage?: string;
  shadow?: string;
  bgOverlay?: string;
  expendTo?: ExpendToType;
  CloseIcon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  closeBtnSx?: ThemeUIStyleObject;
}

type events =
  | {
      expendable?: never;
      expended?: never;
      onClick?: never;
      onClose?: never;
      duration?: never;
      timingFunc?: never;
      ariaLabelledBy: never;
      ariaDescribedBy: never;
    }
  | {
      expendable?: boolean;
      expended: boolean;
      onClick: () => void;
      onClose?: () => void;
      duration?: number;
      timingFunc?: string;
      ariaLabelledBy: string;
      ariaDescribedBy: string;
    };

export type CardProps = CardCommonProps & events;
export type TransitionType = {
  duration?: number;
  timingFunc?: string;
};

export interface GetCardStyles {
  position: BoundingClientRecType;
  isFullScreen: boolean;
  transitionProps: TransitionType;
  expendable?: boolean;
  expended?: boolean;
  expendTo?: ExpendToType;
  bgImage?: string;
}