import styled from "styled-components";

interface DividerProp {
  marginTop?: string;
  marginBottom?: string;
}

export const StyledDivider = styled.hr<DividerProp>`
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props?.theme?.divider?.color ?? "#E0E0E0"};
  margin-top: ${(props) => props.marginTop ?? 0};
  margin-bottom: ${(props) => props.marginBottom ?? 0};
`;

export const StyledVerticalDivider = styled.hr<DividerProp>`
  border-right-width: 1px;
  border-right-color: ${(props) => props?.theme?.divider?.color ?? "#E0E0E0"};
  margin-left: ${(props) => props.marginTop ?? 0};
  margin-right: ${(props) => props.marginBottom ?? 0};
`;
