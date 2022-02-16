import styled, { css } from "styled-components";

interface TabDropdownContainerProp {
  screenType?: string;
  ref: any;
}

interface TabHeadingWrapperProp {
  screenType?: string;
}
interface TabHeadingItemProp {
  active?: boolean;
  disabled?: boolean;
  screenType?: string;
  columns: number;
}

interface TabProp {
  active?: boolean;
}

export const TabHeadingWrapper = styled.div<TabHeadingWrapperProp>`
  display: flex;
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  border-radius: 8px;
  border: 2px solid #e9e9eb;
  background: #e9e9eb;
`;

export const TabHeadingItem = styled.button<TabHeadingItemProp>`
  flex: ${(props) =>
    props.screenType === "sm" ? "1 0 50%" : `1 0 ${100 / props.columns}%`};
  padding: 12px 0 9px;
  outline: 0;
  cursor: pointer;
  border: 0;
  background: rgba(118, 118, 128, 0.12);
  color: #242a52;
  &:hover {
    border-color: ${(props) => props.disabled && "transparent"};
    background: #fff;
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
  &:nth-child(1) {
    border-radius: 8px 0 0 8px;
  }
  &:nth-child(4) {
    border-radius: 0 8px 8px 0;
  }
  background: ${(props) => (props.active ? "#fff" : "#e9e9eb")};
  border-radius: ${(props) => (props.active ? 6 : "")};
  transition: all 0.3s ease;
`;

export const TabDropdownContainer = styled.div<TabDropdownContainerProp>`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  box-sizing: border-box;
  margin: 0 24px;
  position: relative;
`;

export const TabDropdownWrapper = styled.div<TabHeadingWrapperProp>`
  display: flex;
  flex-direction: column;
  z-index: 50;
  border-radius: 8px;
  width: 100%;
  position: absolute;
  top: 100%;
`;

export const TabDropdownItem = styled.button`
  max-width: 300px;
  overflow-wrap: break-word;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  padding: 12px 9px;
  outline: 0;
  cursor: pointer;
  border: 0;
  color: #242a52;
  border-width: 0 !important;
  &:focus,
  &:focus-visible {
    background: #fff;
  }
  &:hover {
    background: #fff;
  }
  &:last-child {
    border-width: 0 !important;
    border: 0;
    border-radius: 0px 0px 8px 8px;
  }
`;

export const Tab = styled.div<TabProp>`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const ArrowIcon = styled.img`
  width: 15px;
  display: inline;
`;