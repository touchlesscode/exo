import { KeenSliderOptions, KeenSliderPlugin } from 'keen-slider/react';
import { ThemeUIStyleObject } from 'theme-ui';

export interface SliderProps {
  itemsToShow?: number | NonEmptyArray<number>;
  disableTransform?: boolean;
  disabled?: boolean | NonEmptyArray<boolean>;
  spacing?: number | NonEmptyArray<number>;
  sx?: ThemeUIStyleObject;
  options?: KeenSliderOptions;
  plugins?: KeenSliderPlugin[];
}
