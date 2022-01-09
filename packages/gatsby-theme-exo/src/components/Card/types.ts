import OverlayProps from '@exoTheme/components/Overlay/types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SliderProps } from '@exoTheme/components/Slider/types';
import TextBlockProps from '@exoTheme/components/TextBlock/types';
import { CardProps as ThemeCardProps, ThemeUIStyleObject } from 'theme-ui';

interface BaseProps extends Omit<ThemeCardProps, 'sx'> {
  bordered?: boolean;
  padding?: string;
  elevated?: boolean;
  loading?: boolean;
  radius?: string;
  sx?: never;
  cardStyles?: ThemeUIStyleObject;
}

type CardOverlayProps =
  | { overlayed?: false; overlay?: never }
  | { overlayed: true; overlay?: OverlayProps };

export type CardProps = BaseProps & CardOverlayProps;

export type ExpandableCardProps = CardProps & {
  expanded: boolean;
  onClick: () => void;
  onClose: () => void;
  duration?: number;
  CloseBtn?: JSX.Element;
  CloseIcon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  expandTo?: ExpandToType;
  parentRef?: React.MutableRefObject<HTMLDivElement>;
  parentStyles?: ThemeUIStyleObject;
};

export type ExpandToType = {
  width?: string;
  left?: string;
  top?: string;
  right?: string;
  transform?: string;
};

export type CardWithSlidingHeaderProps = CardProps &
  SliderProps & {
    images?: {
      image: IGatsbyImageData;
      id: string;
    }[];
    content?: TextBlockProps;
    sliderPosition?: 'top' | 'bottom';
    cardStyles?: ThemeUIStyleObject;
  };
