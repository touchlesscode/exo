import { KeenSliderOptions, KeenSliderPlugin } from 'keen-slider/react';
import { ThemeUIStyleObject } from 'theme-ui';

export type SliderProps = {
  slideStyles?: ThemeUIStyleObject;
  sliderParent?: ThemeUIStyleObject;
  sliderItem?: ThemeUIStyleObject;
  options?: KeenSliderOptions;
  plugins?: KeenSliderPlugin[];
};
