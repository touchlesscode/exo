import styled, { css } from "styled-components";

interface SliderButtonProp {
    direction: "left" | "right";
}

export const SliderButtonWrapper = styled.button<SliderButtonProp>`
    width: 50px;
    height: 100%;
    border: none;
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.3;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 9.98px;
        height: 15.96px;
        pointer-events: none;
    }

    ${props => props.direction === "left" && css`
        left: 0;
    `}
    ${props => props.direction === "right" && css`
        right: 0;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    `}
`;