import styled, { css } from "styled-components";

interface SliderButtonProp {
  direction: "left" | "right";
  hideSliderShadow?: boolean;
  height: string;
  placement: string[];
}

export const SliderButtonWrapper = styled.button<SliderButtonProp>`
  padding: 0 0.2rem 0 1.5rem;
  height: ${({ height }) => height};
  border: none;
  background: ${(props) =>
    props.hideSliderShadow
      ? "transparent"
      : "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"};
  opacity: ${(props) => (props.hideSliderShadow ? 1 : 0.3)};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ placement }) => css`
    top: ${placement[1]};
    left: ${placement[0]};
    right: ${placement[2]};
    bottom: ${placement[3]};
  `}

  ${(props) =>
    props.direction === "left" &&
    css`
      left: 0;
      right: unset;
    `}
    ${(props) =>
    props.direction === "right" &&
    css`
      right: 0;
      left: unset;
      transform: rotate(180deg);
    `}
`;

export const ImageWrapper = styled.div`
  width: 1.75rem;
  height: 1.75rem;
`;
