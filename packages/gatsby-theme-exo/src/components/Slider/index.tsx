import * as React from 'react';
import { Box, useThemeUI } from 'theme-ui';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { SliderProps } from '@exoTheme/components/Slider/types';
import { generateBreakpoints } from './helpers';

const Slider: React.FC<SliderProps> = ({
  children,
  itemsToShow = 4,
  spacing = 10,
  disabled = false,
  options,
  plugins = [],
  sx
}) => {
  const { theme } = useThemeUI();
  const { slides, ...restOptions } = options || {};

  const breakpoints = generateBreakpoints(
    theme?.breakpoints,
    disabled,
    spacing,
    itemsToShow
  );

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints,
      loop: true,
      mode: 'snap',
      disabled: Array.isArray(disabled) ? disabled[0] : disabled,
      slides:
        !slides || typeof slides === 'object'
          ? {
              perView: Array.isArray(itemsToShow)
                ? itemsToShow[0]
                : itemsToShow,
              spacing: Array.isArray(spacing) ? spacing[0] : spacing,
              ...(typeof slides === 'object' && slides)
            }
          : slides,
      ...restOptions
    },
    [...plugins]
  );

  return (
    <Box ref={ref} className="keen-slider" sx={{ cursor: 'grab', ...sx }}>
      {React.Children.map(children, (child) => (
        <div className={'keen-slider__slide'}>{child}</div>
      ))}
    </Box>
  );
};

export default Slider;
