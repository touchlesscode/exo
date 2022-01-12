import { KeenSliderOptions } from 'keen-slider/react';
import { ThemeUIStyleObject } from 'theme-ui';

export interface SliderProps {
  itemsToShow?: number;
  disableTransform?: boolean;
  disabled?: boolean;
  spacing?: number;
  sx?: ThemeUIStyleObject;
  options?: KeenSliderOptions;
  slideOnScrollingY?: boolean;
  speed?: number;
}
