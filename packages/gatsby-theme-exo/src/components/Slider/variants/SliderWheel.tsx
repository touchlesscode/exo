import * as React from 'react';
import Slider from '..';
import { WheelControls } from '../helpers';
import { SliderProps } from '../types';
interface SliderWheelProps extends SliderProps {
  children: React.ReactNode;
}

const SliderWheel: React.FC<SliderWheelProps> = ({
  children,
  options,
  slideStyles
}) => {
  return (
    <Slider
      plugins={[WheelControls]}
      options={options}
      slideStyles={slideStyles}
    >
      {children}
    </Slider>
  );
};

export default SliderWheel;
