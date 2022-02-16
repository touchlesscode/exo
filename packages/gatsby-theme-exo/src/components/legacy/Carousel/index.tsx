/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import WheelControls from "./WheelControls";
import "keen-slider/keen-slider.min.css";
import Modal from "@components/Modals";
import CarouselArrow from "@components/CarouselArrow";
import { Box, ThemeUIStyleObject } from "theme-ui";
import CarouselBadge from "@components/CarouselBadge";
import { isBrowser } from "@utils/isBrowser";
interface CarouselProps {
  disableTransform?: boolean;
  disabled?: boolean;
  title?: React.ReactNode;
  style?: any;
  slideStyle?: {};
  slidesParent?: ThemeUIStyleObject;
  slideWrapper?: ThemeUIStyleObject;
  carouselContainer?: ThemeUIStyleObject;
  asGallery?: boolean;
  verticalGallery?: boolean;
  showArrows?: boolean;
  showBadge?: boolean;
  sliderOptions?: {};
  galleryOptions?: {};
  count?: number;
  galleryPerViewSlide?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  disabled = false,
  title: Title,
  style,
  slideStyle,
  slidesParent,
  slideWrapper,
  asGallery = false,
  verticalGallery,
  sliderOptions,
  galleryOptions,
  showArrows = false,
  showBadge = false,
  count,
  galleryPerViewSlide,
  carouselContainer,
}) => {
  const [openState, setOpenState] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentGallery, setCurrentGallery] = useState(0);
  const galleryRef = useRef(null);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    ...sliderOptions,
    ...{
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
  });
  const [verticalRef] = useKeenSlider<HTMLDivElement>(
    {
      ...galleryOptions,
      ...{
        initial: 0,
        slideChanged(slider) {
          setCurrentGallery(slider.track.details.rel);
        },
      },
    },
    [WheelControls]
  );
  useEffect(() => {
    setCurrentSlide(0);
    setCurrentGallery(0);
  }, [openState]);

  return (
    <Box sx={carouselContainer}>
      {Title}
      {verticalGallery && openState && galleryOptions ? (
        <Modal
          open={openState}
          onClose={() => setTimeout(() => setOpenState(false), 0)}
          mode={"gallery"}
          closeIcon="white"
          backdrop={"blur"}
        >
          <div
            ref={verticalRef}
            className="keen-slider"
            style={{
              ...style,
              ...{
                width: "100vw",
                maxWidth: "780px",
                margin: "0 auto",
                height: "100vh",
                cursor: "pointer",
              },
            }}
          >
            {showBadge && (
              <CarouselBadge
                item={currentGallery + (galleryPerViewSlide || 1) - 1}
                itemsCount={count || 0}
              />
            )}
            {React.Children.map(children, (child, index) => (
              <div
                key={"keen-slider-gallery" + index}
                className="keen-slider__slide"
              >
                {child}
              </div>
            ))}
            {disabled ? children : null}
          </div>
        </Modal>
      ) : (
        sliderOptions && (
          <Box
            sx={{
              ...{
                position: "relative",
                borderRadius: ["0", "0", "10px"],
                cursor: "zoom-in",
              },
              ...slidesParent,
            }}
          >
            <div
              ref={asGallery ? galleryRef : ref}
              className={!asGallery ? "keen-slider" : ""}
              style={style}
              onClick={() => setOpenState(true)}
            >
              {React.Children.map(children, (child, index) => (
                <Box
                  key={"keen-slider" + index}
                  className={!asGallery ? "keen-slider__slide" : ""}
                  sx={{
                    ...{
                      borderRadius: ["0", "0", "10px"],
                    },
                    ...(slideStyle as ThemeUIStyleObject),
                  }}
                >
                  <Box sx={slideWrapper}>{child}</Box>
                </Box>
              ))}
              {disabled ? children : null}
            </div>
            {showBadge && (
              <CarouselBadge item={currentSlide + 1} itemsCount={count || 0} />
            )}
            <CarouselArrow
              show={showArrows}
              direction="left"
              onClick={(e: any) =>
                e.stopPropagation() ||
                (instanceRef.current && instanceRef.current?.prev())
              }
              disabled={currentSlide === 0}
            />
            <CarouselArrow
              show={showArrows}
              direction="right"
              onClick={(e: any) =>
                e.stopPropagation() ||
                (instanceRef.current && instanceRef.current?.next())
              }
              disabled={
                currentSlide ===
                (instanceRef.current &&
                  instanceRef.current.track.details?.slides.length - 1)
              }
            />
          </Box>
        )
      )}
    </Box>
  );
};

export default Carousel;
