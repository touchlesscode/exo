import * as React from 'react';
import { Box } from 'theme-ui';
import Slider from '@exoTheme/components/Slider';
import { WheelControls } from '@exoTheme/components/Slider/helpers';
import { SliderProps } from '@exoTheme/components/Slider/types';

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
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <Box ref={ref}>
      <Slider
        plugins={[...plugins, WheelControls]}
        options={{ ...options, mode: 'free', rubberband: false }}
        sx={{
          pointerEvents: 'none',
          ...sx
        }}
        {...props}
      >
        {children}
      </Slider>
    </Box>
  );
};

export default SliderWheel;
