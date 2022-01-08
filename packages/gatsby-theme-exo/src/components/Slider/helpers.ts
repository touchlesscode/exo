import { KeenSliderPlugin } from 'keen-slider/react';

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
      window.pageYOffset <= 50 ||
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
  // slider.track.details.slides.map((slide, index) =>
  //   slider.moveToIdx(index, undefined, {
  //     duration: 1000,
  //     easing: (t: number) => 1000
  //   })
  // );
  // slider.track.details.progress = 20;
};
