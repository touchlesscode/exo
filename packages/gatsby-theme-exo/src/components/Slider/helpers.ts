import { KeenSliderPlugin } from 'keen-slider/react';

export const WheelControls: KeenSliderPlugin = (slider) => {
  if (typeof window === 'undefined') return;
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    const slide = (window.pageYOffset / 5) * -1;

    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: slide,
          y: slide
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
    if (
      window.pageYOffset <= 0 ||
      window.innerHeight + window.pageYOffset >= docHeight ||
      window.localStorage.getItem('bodyLocked') === 'true'
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
