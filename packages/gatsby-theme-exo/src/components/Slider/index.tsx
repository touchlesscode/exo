import * as React from 'react';
import { Box } from 'theme-ui';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { SliderProps } from '@exoTheme/components/Slider/types';
interface Props extends SliderProps {
  children: React.ReactNode;
}
const Slider: React.FC<Props> = ({
  options,
  plugins,
  slideStyles,
  children
}) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      ...options
    },
    plugins
  );

  return (
    <Box ref={ref} className="keen-slider">
      {React.Children.map(children, (child) => (
        <div className={'keen-slider__slide'}>
          <Box sx={slideStyles}>{child}</Box>
        </div>
      ))}
    </Box>
  );
};

export default Slider;
