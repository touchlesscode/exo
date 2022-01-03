import OverlayProps from '@exoTheme/components/Overlay/types';

interface BaseProps {
  bordered?: boolean;
  padding?: string;
  elevated?: boolean;
  loading?: boolean;
  radius?: string;
}

type CardOverlayProps =
  | { overlayed?: false; overlay?: never }
  | { overlayed: true; overlay?: OverlayProps };

export type CardProps = BaseProps & CardOverlayProps;

export type ExpendableCardProps = CardProps & {
  expended: boolean;
  onClick: () => void;
  onClose: () => void;
  duration?: number;
  CloseBtn?: JSX.Element;
  CloseIcon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  expendTo?: ExpendToType;
};

export type ExpendToType = {
  width?: string;
  left?: string;
  top?: string;
  right?: string;
  transform?: string;
};
