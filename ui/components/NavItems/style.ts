import styled, { css } from "styled-components";

interface NavItemsWrapperProp {
    screenType ?: string;
    isSidebar ?: boolean;
}

interface LinkTextProp {
    isTitle ?: boolean;
}

interface NavExpandIconWrapperProp {
    expanded ?: boolean;
}

export const HeaderNavItemsWrapper = styled.ul<NavItemsWrapperProp>`
    display: ${props => props.screenType == "lg" ? "flex" : 'none' };
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 2rem;
    height: 100%;
`;

export const HeaderNavItem = styled.li`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
    width: auto;
`;

export const LinkText = styled.p<LinkTextProp>`
	margin: 0;
    display: inline-flex;
    align-items: center;
	cursor: pointer;
	font-family: ${(props) => props.theme.fontFamily};
	&:hover {
		color: #757575;
	}

	color: ${(props) =>
		props.theme.themeType === "dark" ? (props.isTitle ? props.theme.darkThemeContrastColor : "black") : "black"};
`

export const NavExpandIconWrapper = styled.span<NavExpandIconWrapperProp>`
    margin-left: 0.125rem;
    transition: all 0.1s ease;

    ${props => props.expanded && css`
        transform: rotate(180deg);
    `}
`

export const ButtonWrapper = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
`

export const SubNavOptions = styled.ul`
    position: absolute;
    top: 1.5rem;
    right: 0;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-flow: column;
    gap: 10px;
    width: 7rem;
    box-shadow: 0px 0px 30px rgb(127 137 161 / 25%);
    list-style-type: none;
`;


export const SidebarNavItemsWrapper = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: column;
    gap: 1rem;
`
export const SidebarNavItem = styled.li`
    a {
        display: block;
        width: fit-content;
        padding: 0.5rem 1rem 0.5rem 0;
    }
`