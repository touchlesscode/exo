import styled, { css } from "styled-components";

import { getThemeObjectByType } from "@utils/index";

interface StyledInputProp {
    showSuggestions : boolean
}

export const AutocompleteWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 11;
`

export const StyledInput = styled.input<StyledInputProp>`
    box-sizing: border-box;
    // padding: 0.688rem 0.938rem;
    padding: 9px 20px 8px;
    border: 1px solid #C7C7C7;
    width: 100%;
    height: 100%;
    border-radius: 3.563rem;

    ${props => props.showSuggestions && css`
        border-top-left-radius: 0.625rem;
        border-top-right-radius: 0.625rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-color: transparent;
        outline: none;
        box-shadow: 0px 8px 24px 0px rgba(113, 113, 113, 0.25);
    `}

    &::placeholder {
        color: ${props => props?.theme?.colors?.["gray-40"]};
    }

    ${props => getThemeObjectByType("p1", props?.theme?.text || {})}
`

export const StyledSuggestionBox = styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;
    background-color: white;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    box-shadow: 0px 24px 24px 0px rgba(113, 113, 113, 0.25);
`

export const StyledList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-flow: column;
`

export interface StyledListItemProps {
    highlight: boolean;
}

export const StyledListItem = styled.li`
    ${props => getThemeObjectByType("p4", props?.theme?.text || {})};
    ${(props: StyledListItemProps) => props.highlight ? "background-color: rgba(58, 95, 150, 0.15)" : ""};
    font-weight: 400;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #3A5F96;
    cursor: pointer;
    a {
        padding: 0.5rem 1.25rem;
        text-decoration: none;
        width: max-content;
        display: inline-block;
        color: #3A5F96;
        font-weight: 400;
        em {
          font-style: normal;
          font-weight: 600;
        }
    }
    &:hover {
        background-color: rgba(58, 95, 150, 0.15);
    }
`

export const CloseWrapper = styled.div`
    position: absolute;
    top: 0.625rem;
    right: 1rem;
    cursor: pointer;
`

export const StyledTrendingText = styled.div`
    color: #828282;
    padding: 1rem 1.25rem 0rem;
    font-size: 14px;
    font-weight: 600;
`