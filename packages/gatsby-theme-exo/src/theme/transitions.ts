const transitions = {
  property: {
    none: 'none',
    all: 'all',
    default: `
      background-color,
      border-color,
      color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter`,
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform'
  },
  timingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  fillMode: {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both'
  }
};

export default transitions;
