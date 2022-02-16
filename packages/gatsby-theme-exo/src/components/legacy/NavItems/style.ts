import styled, { css } from "styled-components";

interface NavItemsWrapperProp {
  screenType?: string;
  isSidebar?: any;
  ExpandedMore?: boolean;
}

interface LinkTextProp {
  isTitle?: boolean;
}

interface NavExpandIconWrapperProp {
  expanded?: boolean;
  isExpandable?:boolean;
}

export const HeaderNavItemsWrapper = styled.ul<NavItemsWrapperProp>`
  display: ${(props) => (props.screenType == "lg" ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  list-style-type: none;
  padding: 0;
  // margin: auto;
  gap: 2rem;
  height: 100%;
  position: relative;
  // margin-left: auto;
  // margin-right: 50px;
`;

export const LinkText = styled.div<LinkTextProp>`
  margin: 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: ${(props) => props?.theme?.fontFamily};
  &:hover {
    color: #757575;
  }
`

export const NavExpandIconWrapper = styled.span<NavExpandIconWrapperProp>`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  position: relative;
  left: 5px;

  img {
    transition: all 0.1s ease;
  }

  ${(props) =>
    props.expanded &&
    css`
      img {
        transform: rotate(180deg);
      }
    `}
`;

export const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  line-height: 42px;
  position: relative;
`;

export const SubNavOptions = styled.ul<NavExpandIconWrapperProp>`
  position: absolute;
  top: 36px;
  right: -85x;
  background-color: white;
  padding :18px 0px 18px 0px;
  display: flex;
  width:230px;
  flex-flow: column;
  gap: 0.625rem;
  list-style-type: none;
  justify-content: space-around;
  font-family: ${(props) => props?.theme?.fontFamily};
  visibility: ${props => props.expanded && props.isExpandable  ? 'visible' : 'hidden'};
  box-shadow: 0px 12px 32px rgba(26, 26, 26, 0.24);
border-radius: 8px;
 
`;

export const DropdownArroImg = styled.img`
transition: all 0.1s ease;
justify-content:center;
margin: 1px 0px 0px 3px;

`

export const DropdownContainer = styled.button`
position:relative;
margin:0px;
padding:0px;
border:none;
background:transparent;
`
export const HeaderNavItem = styled.li<NavExpandIconWrapperProp>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  // position: relative;
  // flex-shrink: 0;
  flex-direction: row;
  width: auto;
  padding:0px;

  ${props => props.expanded && props.isExpandable && css `
  &:hover{
    color: #757575;
   
  
    ${DropdownArroImg} {
      transform: rotate(180deg) !important;
    }
  }
    `}

`;
export const SidebarNavItemsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  gap: 3.5rem;
  padding: 0px;
`;
export const SidebarNavItemsMoreWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column;
  gap: 3.5rem;
  padding: 0px;
`;
export const SidebarNavItem = styled.li`
  a {
    display: inline-block;
    width: fit-content;
    padding: 0.5rem 1rem 0.5rem 0;
    color: white;
  }
`;
export const SubNavItem = styled.li`
  &:hover {
    background: rgba(36, 42, 82, 0.1);
  }
  a {
    font-family: ${(props) => props?.theme?.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.875rem;
    letter-spacing: -0.01em;
    color: ${(props) => props?.theme?.colors?.["primary-50"]};
    padding: 0 1rem;
    // padding-left:16px;
    // padding-bottom:10px;
    align-items:center;
  }
`;
