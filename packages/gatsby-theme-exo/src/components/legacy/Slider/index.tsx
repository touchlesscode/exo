/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState } from "react";

import SliderButton from "@components/SliderButton";

import { SlideContainer, Slide, CurrentSlideBadge } from "./style";
import Close from "@components/Close";
import useLockBodyScroll from "@hooks/useLockBodyScroll";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface SliderPropType {
  content:
    | {
        asset: {
          gatsbyImageData: IGatsbyImageData;
        };
      }[]
    | string[];
  showSlideNumber?: boolean;
  sliderIcon?: string;
  counterLabel?: string;
  hideSliderShadow?: boolean;
  showNavigationButtons?: boolean;
  slideByTouch?: boolean;
  fullScreenMode?: boolean;
  setFullScreenMode?: React.Dispatch<React.SetStateAction<boolean>> | null;
}
interface CoordsType {
  clientX: number | null;
  clientY: number | null;
}

const Slider: FC<SliderPropType> = ({
  content,
  showSlideNumber = false,
  counterLabel,
  fullScreenMode = false,
  setFullScreenMode,
  showNavigationButtons = true,
  slideByTouch = false,
  sliderIcon,
  hideSliderShadow,
}) => {
  useLockBodyScroll(fullScreenMode);
  const [slideIndex, setSlideIndex] = useState(1);
  const [touchCoord, setTouchCoord] = useState<CoordsType>({
    clientX: null,
    clientY: null,
  });

  const nextSlide = () => {
    if (slideIndex !== content.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === content.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(content.length);
    }
  };
  function handleTouchStart(e: any) {
    if (!slideByTouch) return;
    const { clientX, clientY } = e.touches[0];
    setTouchCoord({ clientX, clientY });
  }
  function handleTouchMove(e: any) {
    if (!slideByTouch) return;
    const { clientX, clientY } = touchCoord;
    if (!clientX || !clientY) return;
    const xDiff = clientX - e.touches[0].clientX;
    const yDiff = clientY - e.touches[0].clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*slide in x axis*/
      if (xDiff > 0) nextSlide();
      else prevSlide();
    }
    setTouchCoord({ clientX: null, clientY: null });
  }
  console.log(content);
  return (
    <SlideContainer
      fullScreenMode={fullScreenMode}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      sx={
        !fullScreenMode
          ? {
              cursor: "zoom-in",
            }
          : {}
      }
    >
      {content.map((obj, index) => {
        const image =
          typeof obj !== "string" && getImage(obj.asset.gatsbyImageData);
        return (
          <Slide
            key={index}
            active={slideIndex === index + 1}
            onClick={() =>
              setFullScreenMode && !fullScreenMode
                ? setFullScreenMode(true)
                : null
            }
          >
            {typeof obj !== "string" && obj.asset.gatsbyImageData
              ? image && (
                  <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={image}
                    alt={`slide-${index}`}
                    objectPosition="50%"
                  />
                )
              : typeof obj === "string" && (
                  <img src={obj} alt={`slide-${index}`} />
                )}
          </Slide>
        );
      })}
      {showSlideNumber && (
        <CurrentSlideBadge fullScreenMode={fullScreenMode}>
          {fullScreenMode && counterLabel ? `${counterLabel} ` : null}
          {`${slideIndex}/${content.length}`}
        </CurrentSlideBadge>
      )}
      {showNavigationButtons ? (
        <>
          <SliderButton
            hideSliderShadow={hideSliderShadow}
            sliderIcon={sliderIcon}
            moveSlide={nextSlide}
            direction="left"
          />
          <SliderButton
            hideSliderShadow={hideSliderShadow}
            sliderIcon={sliderIcon}
            moveSlide={prevSlide}
            direction="right"
          />
        </>
      ) : null}
      {fullScreenMode && (
        <Close
          closeTheme={{
            closeStyle: {
              width: "24px",
              height: "24px",
              position: "absolute",
              top: "22px",
              right: "22px",
            },
          }}
          closeConfig={{
            onClick: () =>
              setFullScreenMode ? setFullScreenMode(false) : null,
          }}
        />
      )}
    </SlideContainer>
  );
};

export default Slider;
