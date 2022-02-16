import styled from "styled-components";

interface SlideContainerProp {
  fullScreenMode?: boolean;
}
interface SlideProp {
  active?: boolean;
}
interface CurrentSlideBadgeType {
  fullScreenMode: boolean;
}

export const SlideContainer = styled.div<SlideContainerProp>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: inherit;
  ${(props) =>
    props.fullScreenMode
      ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 14;
    background: #262626;
    border-radius: unset;
    img {
      object-fit: contain !important;
    }
  `
      : ``}
`;

export const Slide = styled.div<SlideProp>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
  border-radius: inherit;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CurrentSlideBadge = styled.span<CurrentSlideBadgeType>`
  position: absolute;
  bottom: 28px;
  right: 24px;
  padding: 5px 10px 4px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(32px);
  border-radius: 57px;
  color: white;
  font-size: 15px;
  line-height: 20px;
  ${({ fullScreenMode }) =>
    fullScreenMode
      ? `
      top: 20px;
      left: 20px;
      right: unset;
      bottom: unset;
      background: rgba(255, 255, 255, 0.3);
      position: fixed;
    `
      : ``}
`;
