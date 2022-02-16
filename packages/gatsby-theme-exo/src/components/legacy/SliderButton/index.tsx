/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";

import LeftArrow from "@assets/icons/arrow-left.svg";

import { SliderButtonWrapper, ImageWrapper } from "./style";
import ImageContainer from "@components/ImageContainer";
import useKeyPressed from "@hooks/useEscPressed";

interface SliderButtonPropType {
  sliderIcon?: string;
  hideSliderShadow?: boolean;
  direction: "left" | "right";
  moveSlide: () => void;
  height?: string;
  placement?: string[];
  style?: any;
  index: number;
}
interface EventsType {
  [key: string]: [string, string];
}
const events: EventsType = {
  left: ["Left", "ArrowLeft"],
  right: ["Right", "ArrowRight"],
};

const SliderButton: FC<SliderButtonPropType> = ({
  sliderIcon,
  hideSliderShadow,
  direction,
  moveSlide,
  height = "100%",
  placement = ["0", "50%", "50%", "0"],
  style,
  index,
}) => {
  useKeyPressed(events[direction], moveSlide, [index]);
  return (
    <SliderButtonWrapper
      height={height}
      onClick={moveSlide}
      direction={direction}
      hideSliderShadow={hideSliderShadow}
      placement={placement}
      sx={style}
      aria-label={`${direction} slide`}
    >
      <ImageWrapper>
        <ImageContainer source={sliderIcon ?? LeftArrow} alt="" />
      </ImageWrapper>
    </SliderButtonWrapper>
  );
};

export default SliderButton;
