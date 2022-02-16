import * as Slider from '@radix-ui/react-slider';
import styled, { css } from "styled-components";

export const FilterSliderWrapper = styled.div<{
  filterType: "PRICE" | "PAYMENT";
}>`
  margin-bottom: 2rem;

  ${(props) =>
    props.filterType === "PAYMENT" &&
    css`
      visibility: hidden;
      height: 0;
      margin-bottom: 0;
      overflow: hidden;
    `}

  .noUi-target {
    width: calc(100% - 20px);
    margin-left: auto;
    padding-right: 0.4rem;
    margin-right: auto;
    height: 6px;
    position: relative;
    top: 10px;
  }
  .noUi-connect {
    background: ${(props) => props?.theme?.slider?.colors?.lineColorBgColor};
  }

  .noUi-handle {
    width: 28px !important;
    height: 28px !important;
    border-radius: 50%;
    background: ${(props) => props?.theme?.slider?.colors?.handleColor};
    box-shadow: none;
    top: -10px !important;
    cursor: pointer;

    &::after,
    &::before {
      display: none;
    }
  }
`;
export const SliderAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.875rem;
`;
export const SliderAmount = styled.div`
  border: 1px solid rgba(77, 137, 231, 0.25);
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-family: ${(props) => props?.theme?.fontFamily};
  font-style: 500;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.01em;
  color: ${(props) => props?.theme?.slider?.colors?.amountColor};
`;

// Slider
export const StyledSlider = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  &[data-orientation="horizontal"] { height: 20px; }
`
export const StyledTrack = styled(Slider.Track)`
  background-color: #fafafa;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  border: 1px solid #d3d3d3;
  &[data-orientation="horizontal"] { height: 6px };
`;

export const StyledRange = styled(Slider.Range)`
  position: absolute;
  background-color: rgba(77, 137, 231, 0.5);
  border-radius: 9999px;
  height: 100%;
`

export const StyledThumb = styled(Slider.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  background-color: #3A5F96;
  border-radius: 10px;
  &:hover { box-shadow: 0 2px 5px #3A5F96; };
`