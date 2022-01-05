import { KeenSliderPlugin } from 'keen-slider/react';

const getBreakpointSyntax = (width?: string): string => `(min-width: ${width})`;
export const generateBreakpoints = (
  breakpoints: string[] = [],
  disabled: boolean | NonEmptyArray<boolean>,
  spacing: number | NonEmptyArray<number>,
  itemsToShow: number | NonEmptyArray<number>
) => {
  const data: { [key: string]: Record<string, unknown> } = {};
  const spacingArr = Array.isArray(spacing) ? spacing : [spacing];
  const disabledArr = Array.isArray(disabled) ? disabled : [disabled];
  const itemsToShowArr = Array.isArray(itemsToShow)
    ? itemsToShow
    : [itemsToShow];

  for (let i = 0; i < breakpoints.length; i++) {
    if (spacingArr[i + 1] === undefined) spacingArr.push(spacingArr[i]);
    if (disabledArr[i + 1] === undefined) disabledArr.push(disabledArr[i]);
    if (itemsToShowArr[i + 1] === undefined)
      itemsToShowArr.push(itemsToShowArr[i]);
    data[getBreakpointSyntax(breakpoints[i])] = {
      disabled: disabledArr[i + 1],
      slides: {
        perView: itemsToShowArr[i + 1],
        spacing: spacingArr[i + 1]
      }
    };
  }
  return data;
};

export const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.y || window.pageYOffset,
          y: position.y || window.pageYOffset
        }
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY
    };
    dispatch(e, 'ksDragStart');
  }

  function wheel(e: WheelEvent) {
    dispatch(e, 'ksDrag');
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, 'ksDragEnd');
  }

  function eventWheel(e: WheelEvent | Event) {
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (
      window.pageYOffset <= 0 ||
      window.innerHeight + window.pageYOffset >= docHeight
    )
      return;
    if (!wheelActive) {
      wheelStart(e as WheelEvent);
      wheelActive = true;
    }
    wheel(e as WheelEvent);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e as WheelEvent);
    }, 50);
  }

  slider.on('created', () => {
    window.addEventListener('wheel', eventWheel);
    window.addEventListener('scroll', eventWheel);
  });
};
