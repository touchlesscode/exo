import styled, { css } from "styled-components";
import { Link } from "gatsby";

interface SidebarWrapperProps {
  fullSideBar?: boolean;
  open?: boolean;
}

interface TopIconWrapperProp {
  iconWidth?: string;
  iconHeight?: string;
  margin?: string;
  position?: "left" | "right";
}

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  position: fixed;
  left: 0;
  top: 0;
  padding: 1.5rem;
  box-sizing: border-box;
  transform: translateX(-120%);
  z-index: ${(props) => props?.theme?.sideBarZIndex || 4};
  height: 100vh;
  // background-color: ${(props) =>
    props?.theme?.themeType === "dark"
      ? props?.theme?.darkThemeSecondaryColor
      : props?.theme?.colors["primary-dark"] || "white"};
  background-color: #242A52;
  box-shadow: 10px -2px 17px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 10px -2px 17px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 10px -2px 17px -3px rgba(0, 0, 0, 0.2);
  transition: transform 0ms ease-out;

  // width: ${(props) => (props.fullSideBar ? "100%" : "70%")};
width:100%;
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: block;
      transform: translateX(0);
    `}
`;

export const TopIconWrapper = styled.button<TopIconWrapperProp>`
  position: absolute;
  top: 1.5rem;
  right: ${(props) => (props.position === "right" ? "1.5rem" : undefined)};
  left: ${(props) => (props.position === "left" ? "1.5rem" : undefined)};
  width: ${(props) => props.iconWidth ?? "1.5rem"};
  height: ${(props) => props.iconHeight ?? "1.5rem"};
  margin: ${(props) => props.margin ?? "0"};
  background: transparent;
  border: none;
  padding: 0;
`;

export const NavItemsWrapper = styled.div`
  margin-top: 4.5rem;
`;

export const FooterLinkWrapper = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 3.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 0;
  width: 90vw;
  align-items: flex-end;
`;

export const FooterLinkItem = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 33%;
  gap: 0.5rem;
  align-items: center;
`;

export const SocialMediaLinkWrapper = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const SocialMediaLink = styled(Link)`
  width: 1.5rem;
  height: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
