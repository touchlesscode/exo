import { isBrowser } from "@utils/isBrowser";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const BackToTop = () => {
  const [showButton, setShowButton] = React.useState(false);

  const func = React.useCallback(() => {
    if (isBrowser) {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", func);

    return () => document.removeEventListener("scroll", func);
  }, []);

  const handleClick = () => {
    if (isBrowser) {
      window.scrollTo(0, 0);
    }
  };

  if (!showButton) return null;

  return (
    <StyledButton onClick={handleClick} title="back to top">
      <StaticImage
        src="../../assets/icons/up-arrow.png"
        alt="go to top button"
        height={35}
        placeholder="blurred"
      />
    </StyledButton>
  );
};

export default BackToTop;

const StyledButton = styled.button`
  position: fixed;
  z-index: 12;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  cursor: pointer;
  margin: 0;
  padding: 0.3rem;
  transition: all 250ms;
  width: 40px;
  height: 40px;
  left: 10px;
  bottom: 10px;

  :hover,
  :focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  :hover {
    transform: translateY(-1px);
  }

  :active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 50px;
    left: 50px;
  }
`;
