import * as React from 'react';
import { Box, useThemeUI } from 'theme-ui';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { SliderProps } from '@exoTheme/components/Slider/types';
import { generateBreakpoints } from '@exoTheme/components/Slider/helpers';

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
    itemsToShow,
    slides,
    restOptions
  );

  const [ref, slider] = useKeenSlider<HTMLDivElement>(
    {
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
      ...restOptions,
      breakpoints
    },
    [...plugins]
  );

  // console.log(slider.current?.options?.breakpoints);

  React.useEffect(() => {
    if (!slider.current) return;
    // slider.current.destroy()
  }, [plugins]);

  return (
    <Box ref={ref} className="keen-slider" sx={{ cursor: 'grab', ...sx }}>
      {React.Children.map(children, (child) => (
        <Box
          className={'keen-slider__slide'}
          sx={{ minHeight: '0 !important' }}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Slider;
