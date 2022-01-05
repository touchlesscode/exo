import * as React from 'react';
import Slider from '..';
import { WheelControls } from '../helpers';
import { SliderProps } from '../types';

interface SliderWheelProps extends SliderProps {
  slideOnScrollingY?: boolean;
  speed?: number;
}

const SliderWheel: React.FC<SliderWheelProps> = ({
  children,
  plugins = [],
  options = [],
  ...props
}) => {
  return (
    <Slider
      plugins={[...plugins, WheelControls]}
      options={{ ...options, mode: 'free' }}
      {...props}
    >
      {children}
    </Slider>
  );
};

export default SliderWheel;
