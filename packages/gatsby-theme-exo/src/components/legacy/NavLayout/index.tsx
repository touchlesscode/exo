import { FC } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer/Footer.component";
import { Box, ThemeUIStyleObject } from "theme-ui";

interface LayoutType {
  isSrp?: boolean;
  isVdp?: boolean;
  isHome?: boolean;
  transparent?: boolean;
  transparentOnTop?: boolean;
}

interface NavLayoutProps {
  hasFooter?: boolean;
  footerRef?: React.RefObject<HTMLDivElement>;
  headerConfig?: LayoutType;
  wrapperNavStyle?: ThemeUIStyleObject;
}

const NavLayout: FC<NavLayoutProps> = ({
  children,
  headerConfig,
  hasFooter = true,
  footerRef,
  wrapperNavStyle,
}) => {
  return (
    <Box
      sx={{
        ...{
          backgroundColor: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          position: "relative",
          paddingTop: headerConfig?.isHome ? '0px' : ["64px", "64px", "72px"]
        },
        ...wrapperNavStyle,
      }}
    >
      <Header layoutConfig={headerConfig} />
      <main style={{ flexGrow: 1 }}>{children}</main>
      {hasFooter ? <Footer footerRef={footerRef} /> : null}
    </Box>
  );
};

export default NavLayout;
