import styled from "styled-components";

export const Wrapper = styled.div<{ isVisible: boolean }>`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.08),
    0px 1px 13px rgba(0, 0, 0, 0.025);
  z-index: 3;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Text = styled.button`
  border: none;
  background-color: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3a5f96;
`;
export const Button = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 1.5rem;
  color: #ffffff;
  background: #3a5f96;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
`;
