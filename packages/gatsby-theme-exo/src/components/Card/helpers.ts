import { Theme, get, ThemeUIStyleObject } from 'theme-ui';

// Types
import { BoundingClientRecType } from '@exoTheme/types/index';
import { ExpendToType, TransitionType } from '@exoTheme/components/Card/types';

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
  height: expendTo?.height || '100vh',
  width: expendTo?.width || '100vw',
  left: expendTo?.left || '0',
  top: expendTo?.top || '0'
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

const getCardStyles = (
  position: BoundingClientRecType,
  isFullScreen: boolean,
  transitionProps: TransitionType,
  bgImage?: string,
  expendable?: boolean,
  expended?: boolean,
  expendTo?: ExpendToType
): ThemeUIStyleObject => {
  const { durations, timingFuncs } = transitionProps;
  let styles = {};
  if (expended || isFullScreen)
    styles = {
      ...styles,
      zIndex: 'infinity'
    };
  if (!expended && !isFullScreen)
    styles = {
      ...styles,
      ...(bgImage && { backgroundImage: bgImage })
    };
  if (expendable && !expended)
    styles = {
      ...styles,
      cursor: 'pointer'
    };
  if (expended && isFullScreen)
    styles = {
      ...styles,
      ...getTransition(durations?.expend, timingFuncs?.expend)
    };
  if (!expended && isFullScreen)
    styles = {
      ...styles,
      ...getTransition(durations?.collapse, timingFuncs?.collapse)
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
