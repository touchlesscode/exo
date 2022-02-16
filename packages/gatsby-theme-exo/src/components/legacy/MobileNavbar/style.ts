import styled, { css } from "styled-components"
import burgerIcon from "../../assets/images/hamburger-icon.png"

export const StyledNav = styled.nav<{ scrollPos: number }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 6;
    padding: 1rem 1.8125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${(props) =>
        props.scrollPos > 100 &&
        css`
            background-color: #c2c2c2;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        `}
    transition: background-color 0.3s;
`

export const StyledHamburgerButton = styled.button`
    background-image: url(${burgerIcon});
    background-color: transparent;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    height: 40px;
    width: 40px;
    padding: 0;
`
