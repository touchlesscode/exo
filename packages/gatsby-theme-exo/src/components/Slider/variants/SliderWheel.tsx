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
  sx,
  ...props
}) => {
  return (
    <Slider
      plugins={[...plugins, WheelControls]}
      options={{ ...options, mode: 'free' }}
      sx={{
        pointerEvents: 'none',
        ...sx
      }}
      {...props}
    >
      {children}
    </Slider>
  );
};

export default SliderWheel;
