import styled from "styled-components";

interface TitleProp {
  margin?: number | string;
  display?: string;
}
interface IconContainerProp {
  iconWidth?: string;
  iconHeight?: string;
  paddingLeft?: string | number;
  paddingRight?: string | number;
}

interface StyledButtonProps {
  display?: string;
  backgroundColor?: string;
  color?: string;
  btnType?: "primary" | "secondary" | "default";
  padding?: number | string;
  border?: string;
  borderRadius?: number | string;
  width?: number | string;
}

export const Title = styled.div<TitleProp>`
  display: flex;
  align-items: center;
  margin-bottom: 1.875rem;
`;

export const IconContainer = styled.div<IconContainerProp>`
    margin-right: 0.75rem;
    width: ${(props) => props.iconWidth ?? "1.5rem"};
    height: ${(props) => props.iconHeight ?? "1.5rem"};
    flex-shrink: 1;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  background-color: ${(props) => props.backgroundColor ?? "#c8102e"};
  color: ${(props) => props.color ?? "white"};
  padding: ${(props) => props.padding ?? "3px 16px 3px 14px"};
  border: ${(props) => props.border ?? "none"};
  border-radius: ${(props) => props.borderRadius ?? "0.25rem"};
  cursor: pointer;
  width: ${(props) => props.width ?? "fit-content"};
  margin-top: 2.188rem;
  align-items: center;
`;