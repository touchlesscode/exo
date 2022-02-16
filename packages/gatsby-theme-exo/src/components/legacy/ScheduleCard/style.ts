import styled from "styled-components";

export const StyledScheduleCard = styled.div`
  padding: 0 1rem;
`;
export const StyledInnerCard = styled.div`
  box-shadow: 0px 8px 16px rgba(146, 146, 146, 0.15);
  border-radius: 10px;
  padding: 1.5625rem 1.5rem;
`;
export const StyledIntroPara = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 2rem;
  color: #828282;
  margin-bottom: 1rem;
`;
export const StyledIntroHeading = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4375rem;
  color: #3c3c3c;
  margin-bottom: 1.5rem;
`;
export const List = styled.ul`
  margin-bottom: 2rem;
`;
export const ListItem = styled.li`
  display: flex;
  padding: 1.75rem 0;
  align-items: center;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-left: 1.4rem;
  }
`;
export const StyledButton = styled.button`
  background-color: #242a52;
  border-radius: 6px;
  padding: 0.75rem;
  width: 100%;
  border: none;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2rem;
  color: #ffffff;

  :hover {
    opacity: 0.9;
  }
`;
