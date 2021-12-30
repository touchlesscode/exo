import * as React from 'react';
import { Box } from 'theme-ui';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import useIntersectionObserver from '@exoTheme/hooks/useIntersectionObserver';
import useWindowPosition from '@exoTheme/hooks/useWindowPosition';

import { SliderProps } from '@exoTheme/components/Slider/types';

const Slider: React.FC<SliderProps> = ({
  children,
  itemsToShow = 4,
  spacing = 10,
  disabled = false,
  speed = 1,
  slideOnScrollingY = false,
  options,
  sx
}) => {
  const { slides, ...restOptions } = options || {};
  const parentRef = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(parentRef, {});
  const isVisible = !!entry?.isIntersecting;
  const yPosition = useWindowPosition(slideOnScrollingY);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: slideOnScrollingY ? 'free' : 'snap',
    disabled,
    slides:
      !slides || typeof slides === 'object'
        ? {
            perView: itemsToShow || 3,
            spacing: spacing || 15,
            ...(typeof slides === 'object' && slides)
          }
        : slides,
    ...restOptions
  });

  React.useEffect(() => {
    if (!isVisible || !slider.current || !slideOnScrollingY) return;
    slider.current?.container.scroll(yPosition * speed, 0);
  }, [yPosition]);

  return (
    <Box ref={parentRef}>
      <Box ref={ref} className="keen-slider" sx={sx}>
        {React.Children.map(children, (child) => (
          <div className={'keen-slider__slide'}>{child}</div>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
