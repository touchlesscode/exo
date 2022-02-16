import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { StyledHamburgerButton, StyledNav } from "./style";

const MobileNavbar = () => {
  const [scrollPos, setScrollPos] = React.useState<number>(0);

  React.useEffect(() => {
    const scrollFunc = () => setScrollPos(document.body.scrollTop);
    document.body.addEventListener("scroll", scrollFunc);

    return () => document.body.removeEventListener("scroll", scrollFunc);
  }, []);

  return (
    <StyledNav scrollPos={scrollPos}>
      <StyledHamburgerButton />
      <StaticImage
        src="../../assets/images/circle-person-icon.png"
        alt=""
        height={40}
      />
    </StyledNav>
  );
};

export default MobileNavbar;
