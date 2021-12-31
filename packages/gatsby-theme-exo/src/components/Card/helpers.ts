import { Theme, get, ThemeUIStyleObject } from 'theme-ui';

// Types
import { BoundingClientRecType } from '@exoTheme/types/index';
import { ExpendToType, GetCardStyles } from '@exoTheme/components/Card/types';

export const getBaseStyles = (
  rect: BoundingClientRecType
): ThemeUIStyleObject => ({
  height: `${rect?.height}px`,
  width: `${rect?.width}px`,
  top: `${rect?.top}px`,
  left: `${rect?.left}px`,
  position: 'fixed',
  overflow: 'hidden'
});

export const getExpendedStyles = (
  expendTo?: ExpendToType
): ThemeUIStyleObject => ({
  position: 'fixed',
  overflow: 'hidden',
  borderRadius: '0',
  height: `${expendTo?.height || '100vh'} !important`,
  width: `${expendTo?.width || '100vw'} !important`,
  left: `${expendTo?.left || '0'} !important`,
  top: `${expendTo?.top || '0'} !important`
});

export const getTransition = (duration?: number, timingFunc?: string) => {
  const returnDuration = (
    theme: Theme,
    value?: number,
    fallback = 'transitions.duration.200'
  ) => (value || value === 0 ? `${value}ms` : get(theme, fallback));

  const returnTimingFunc = (
    theme: Theme,
    value?: string,
    fallback = 'transitions.timingFunction.linear'
  ) => (value ? value : get(theme, fallback));

  const returnTransition = (
    property: string,
    theme: Theme,
    dur: number | undefined = duration
  ) =>
    `${property}
    ${returnDuration(theme, dur)}
    ${returnTimingFunc(theme, timingFunc)}
    `;

  return {
    transition: (theme: Theme) => `
    ${returnTransition('height', theme)},
    ${returnTransition('width', theme)},
    ${returnTransition('top', theme)},
    ${returnTransition('left', theme)},
    ${returnTransition('border-radius', theme)}`
  };
};

const getCardStyles = ({
  position,
  isFullScreen,
  transitionProps,
  expendable,
  expended,
  expendTo,
  bgImage,
  sx
}: GetCardStyles): ThemeUIStyleObject => {
  const { duration, timingFunc } = transitionProps;
  let styles: ThemeUIStyleObject = {
    position: 'relative',
    ...sx
  };
  if (expended || isFullScreen)
    styles = {
      ...styles,
      zIndex: 'infinity'
    };
  if (!expended && !isFullScreen)
    styles = {
      ...styles,
      ...(bgImage && { backgroundImage: `url(${bgImage})` })
    };
  if (expendable && !expended)
    styles = {
      ...styles,
      cursor: 'pointer'
    };
  if (expended && isFullScreen)
    styles = {
      ...styles,
      ...getTransition(duration, timingFunc)
    };
  if (!expended && isFullScreen)
    styles = {
      ...styles,
      ...getTransition(duration, timingFunc)
    };
  if ((expended && !isFullScreen) || (!expended && isFullScreen))
    styles = {
      ...styles,
      ...getBaseStyles(position)
    };
  if (expended && isFullScreen)
    styles = {
      ...styles,
      ...getExpendedStyles(expendTo)
    };
  return styles;
};

export default getCardStyles;
