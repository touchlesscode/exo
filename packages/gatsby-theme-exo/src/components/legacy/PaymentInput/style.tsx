import styled from "styled-components";

export const InputWrapper = styled.div<{ value: string }>`
  position: relative;
  height: 55px;
  width: calc(50% - 5px);
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #c7c7c7;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    border: none;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 100%;
    gap: 1rem;
    flex-direction: row-reverse;
    align-items: center;
    height: max-content;
  }

  :focus-within {
    background-color: rgba(64, 172, 255, 0.1);
    outline: 2px solid black;
  }

  label {
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 0.75rem;
    font-weight: 500;
    transition: all 0.2s;
    color: ${(props) => props?.theme?.colors?.["gray-20"]};
    white-space: nowrap;
    @media only screen and (max-width: 768px) {
      position: static;
      grid-column: 1;
      grid-row: 1;
    }
  }

  input,
  select {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    top: 24px;
    padding: 0 10px 5px 10px;
    outline: none;
    border: none;
    font-size: 0.85rem;
    background-color: transparent;
    @media only screen and (max-width: 768px) {
      position: static;
      border: 1px solid #4D89E740;
      grid-column: 2;
      grid-row: 1;
      padding: 8px;
      border-radius: 4px;
    }

    :focus {
      & + label {
        transform: scale(0.9);
        left: 5px;
        color: ${(props) => props?.theme?.colors?.primary};
      }
    }
  }
`;
