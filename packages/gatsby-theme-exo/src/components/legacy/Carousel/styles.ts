import styled, { css } from "styled-components";

interface CarouselItemWrapperProp {
    position: "next" | "active" | "previous";
}

interface IndicatorItemProp {
    active: boolean;
}

export const CarouselWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
`;

export const CarouselItemWrapper = styled.div<CarouselItemWrapperProp>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    ${props => props.position === "active" && css`
        opacity: 1;
        transform: translateX(0);
    `}

    ${props => props.position === "active" && css`
        opacity: 1;
        transform: translateX(0);
    `}

    ${props => props.position === "previous" && css`
        transform: translateX(-100%);
    `}

    ${props => props.position === "next" && css`
        transform: translateX(100%);
    `}
`;

export const IndicatorWrapper = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
`;

export const IndicatorItem = styled.button<IndicatorItemProp>`
    cursor: pointer;
    background-color: #000;
    border: 0;
    border-radius: 50%;
    opacity: .5;
    transition: opacity .6s ease;
    width: 10px;
    height: 10px;
    margin: 0;
    padding: 0;

    ${props => props.active && css`
        opacity: 1;
    `}
`;