import { BoxProps } from 'theme-ui';

export interface RatingProps extends BoxProps {
  stars?: number;
  rated?: number;
  fillColor?: string;
  width?: string;
  height?: string;
}
