import React, { FC } from 'react'

import LeftArrow from "@assets/icons/arrow-left.svg";
import RightArrow from "@assets/icons/arrow-right.svg";

import { SliderButtonWrapper } from "./style";

interface SliderButtonPropType {
    direction: "left" | "right";
    moveSlide ?: () => void;
}

const SliderButton:FC<SliderButtonPropType> = ({ direction, moveSlide }) => {
    return (
        <SliderButtonWrapper
          onClick={moveSlide}
          direction={direction}
        >
            <img src={LeftArrow} alt="" />
        </SliderButtonWrapper>
      );
}

export default SliderButton;
