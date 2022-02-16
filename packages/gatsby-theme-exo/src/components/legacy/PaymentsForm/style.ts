import styled, { css } from "styled-components";

export const FormWrapper = styled.div<{ filterType: "PRICE" | "PAYMENT" }>`
  margin-bottom: 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: block;
  }

  ${(props) =>
    props.filterType === "PRICE" &&
    css`
      overflow: hidden;
      visibility: hidden;
      height: 0;
      margin-bottom: 0;
    `}
`;
