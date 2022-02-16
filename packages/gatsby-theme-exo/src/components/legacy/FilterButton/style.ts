import styled, { css } from "styled-components";

export const StyledFiltersButton = styled.button<{
  allSelectedFiltersLength: number;
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  font-family: ${(props) => props?.theme?.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-align: right;
  border-radius: 162px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  ${(props) => {
    return props.allSelectedFiltersLength > 0
      ? css`
          border: none;
          color: #ffffff;
          background-color: #3a5f96;
        `
      : css`
          border: 2px solid #3a5f96;
          color: #3a5f96;
          background-color: transparent;
        `;
  }}

  :hover {
    opacity: 0.9;
  }
`;
