import styled, { css } from "styled-components";

export const StyledBanner = styled.div`
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  display: grid;
  min-height: 300px;
  margin-bottom: 1.5rem;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledHeading = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2.375rem;
  line-height: 2.625rem;
  color: #ffffff;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  padding: 0 1.8125rem;
  margin-bottom: 1.5625rem;
`;
export const StyledSearchBarWrapper = styled.div`
  background-color: white;
  height: 50px;
  width: 100%;
  z-index: 2;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 54px;
  position: relative;
`;
export const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  display: block;
  margin: 0 auto;
  border: none;
  padding-left: 50px;
  padding-right: 120px;
  background-color: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  color: #000000;

  ::placeholder {
    color: #a1a1a1;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
`;
