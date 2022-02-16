import React, { FC, useRef, useState } from "react";
import Back from "@assets/icons/back.inline.svg";
import { Box, Grid, Button } from "theme-ui";
import AutocompleteSearch from "../AutocompleteSearch";
import { Link, navigate } from "gatsby";
import useReadSessionStorage from "@hooks/useReadSessionStorage";
import Dropdown from "@components/Dropdown";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { isBrowser } from "@utils/isBrowser";
import useWindowPosition from "@hooks/useWindowPosition";
import { Chevron, StyledLogo, StyledWordLogo, AccountIcon } from "./style";
import MobileMenu from "./MobileMenu";
import useWindowSize from "@hooks/useWindowSize";
import useLockedBody from "@hooks/useLockBodyScroll";
import useDropBgOverlay from "@hooks/useDropBgOverlay";
import useSetGlobalStyleProperty from "@hooks/useSetGlobalStyleProperty";

interface LayoutType {
  isSrp?: boolean;
  isVdp?: boolean;
  isHome?: boolean;
  transparent?: boolean;
  transparentOnTop?: boolean
}
interface Props {
  bgColor?: string;
  prev?: {
    to: string;
  };
  layoutConfig?: LayoutType;
}

const options = [
  {
    label: "Our Story",
    to: "/about",
  },
  {
    label: "Customer Stories",
    to: "/reviews",
  },
  {
    label: "Why Choose Us?",
    to: "/why-choose-us",
  },
  {
    label: "Work With Us",
    to: "/work-with-us",
  },
  {
    label: "COVID-19 Safety",
    to: "/covid-19-safety",
  }
];

const Header: FC<Props> = ({ bgColor, prev, layoutConfig = {} }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const DropdownBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    isSrp = false,
    isVdp = false,
    isHome = false,
    transparent = false,
    transparentOnTop = false
  } = layoutConfig;
  const prevRoute: string | null = useReadSessionStorage("PREV");

  const hasPrev = Boolean(prevRoute) && !isHome;
  const path: string = isSrp
    ? "/"
    : hasPrev
    ? prevRoute || "/shop/all-used-new-cars"
    : "/shop/all-used-new-cars";
  const showBack = !isHome;
  const showLogo = isHome || (!isSrp && !isVdp);
  const showSearch = isSrp;

  const position = useWindowPosition();
  const isInTop = isBrowser ? position === 0 : true;
  const showHandleOuside = (useWindowSize()?.width || 0) >= 1024 || false;
  const height = ref?.current?.offsetHeight || 0;
  const handleClose = () =>
    isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true);

  const links = [
    {
      label: "Shop",
      to: "/shop/all-used-new-cars",
    },
    {
      label: "Sell/Trade",
      to: "/sell-trade",
    },
    {
      label: "Finance",
      to: "/finance",
    },
    {
      label: "Service",
      to: "/service",
    },
    {
      label: "More",
      action: handleClose,
    },
  ];

  useOnClickOutside<HTMLDivElement | HTMLButtonElement>(
    [dropdownRef, DropdownBtnRef],
    () => (showHandleOuside ? isDropdownOpen && setIsDropdownOpen(false) : null)
  );
  useLockedBody(isDropdownOpen);
  useDropBgOverlay(ref, showHandleOuside && isDropdownOpen, { zIndex: "9" });
  useSetGlobalStyleProperty("--header", height ? `${height}px` : 0);

  const onDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const isTransparentOnTop = transparentOnTop && position < 80

  return (
    <>
      <Box
        ref={ref}
        sx={{
          alignSelf: "flex-start",
          p: ["16px 21px", null, null, "1rem 2.4rem 1rem 1.5rem"],
          pr: [
            "calc(25px + var(--lock-padding))",
            null,
            null,
            "calc(2.4rem + var(--lock-padding))",
          ],
          bg: [
            isTransparentOnTop ? 'transparent' : transparent && height < 24 ? "transparent" : bgColor || "white",
            null,
            null,
            isTransparentOnTop ? 'transparent' : bgColor || "white",
          ],
          transition: 'background 0.3s',
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
          boxShadow: [
            isTransparentOnTop ? null : transparent
              ? position < 24
                ? "none"
                : "0 4px 8px 0 rgba(26, 26, 26, 0.05)"
              : "0 4px 8px 0 rgba(26, 26, 26, 0.05)",
            null,
            null,
            isTransparentOnTop ? null : "0 4px 8px 0 rgba(26, 26, 26, 0.05)",
          ],
          minHeight: ["64px", "64px", "72px"],
        }}
      >
        <Grid
          sx={{
            gridTemplateColumns: [
              !showLogo && !showSearch
                ? "1fr 1fr"
                : "minmax(25px, max-content) 1fr max-content",
              null,
              null,
              "max-content 1fr max-content max-content",
            ],
            alignItems: "center",
            justifyItems: "center",
            gap: ["1rem", "5rem", "8rem", "2rem", null, "6rem"],
            height: ["32px", null, null, "40px"],
          }}
        >
          <GoBack to={prev?.to || path} visible={showBack} hasPrev={hasPrev} />
          <Logo visible={showLogo} />
          <Box
            sx={{
              display: [!showSearch && "none", null, null, "block"],
              width: "100%",
              height: "inherit",
            }}
          >
            <AutocompleteSearch placeholder='Search "New BMW x5"' />
          </Box>
          <Box
            sx={{
              display: ["none", null, null, "flex"],
              color: "#242A52",
              alignItems: "center",
              gap: [null, null, null, "1rem", "2rem"],
              fontWeight: 600,
            }}
          >
            {links.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  tabIndex={0}
                  to={link.to}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ) : (
                <Box
                  key={link.label}
                  sx={{
                    position: "relative",
                  }}
                >
                  <Button
                    ref={DropdownBtnRef}
                    onClick={link.action}
                    sx={{
                      p: 0,
                      background: "none",
                      color: "inherit",
                      fontWeight: "inherit",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "5px",
                    }}
                  >
                    {link.label}
                    <Chevron open={isDropdownOpen} />
                  </Button>
                  <Dropdown
                    ref={dropdownRef}
                    onSelect={handleClose}
                    visible={isDropdownOpen}
                    onClose={onDropdownClose}
                  >
                    {options.map((option) => (
                      <Box
                        key={option.label}
                        as={Link}
                        to={option.to}
                        sx={{
                          color: "#242A52",
                          textDecoration: "none",
                          fontWeight: 500,
                          fontFamily: "Poppins",
                          display: "block",
                          textAlign: "left",
                          py: "8px",
                          px: "16px",
                          "&:hover": {
                            background: "rgba(36, 42, 82, 0.1)",
                          },
                        }}
                      >
                        {option.label}
                      </Box>
                    ))}
                  </Dropdown>
                </Box>
              )
            )}
          </Box>
          <Box
            tabIndex={0}
            sx={{
              display: ["none", null, null, "flex"],
              alignItems: "center",
            }}
          >
            <AccountIcon />
          </Box>
          <Box
            sx={{
              display: [null, null, null, "none"],
              justifySelf: "end",
              height: "inherit",
              zIndex: "11"
            }}
          >
            <MobileMenu
              options={!isDropdownOpen ? links : options}
              hasPrev={isDropdownOpen}
              onPrev={handleClose}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onOpen={() => setIsOpen(true)}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Header;

const GoBack: FC<{ to: string; visible?: boolean; hasPrev?: boolean }> = ({
  to,
  visible = to ? true : false,
  hasPrev = true,
}) => {
  const handleGoBack = () => {
    if (!hasPrev || to === "/") return navigate(to);
    history.back();
  };
  return (
    <Button
      onClick={handleGoBack}
      sx={{
        width: "32px",
        display: [visible ? "grid" : "none", null, null, "none"],
        justifySelf: "start",
        background: "none",
        height: "inherit",
        placeContent: "center",
        p: 0,
        cursor: "pointer",
      }}
    >
      <Back />
    </Button>
  );
};

const Logo: FC<{ visible?: boolean }> = ({ visible = true }) => {
  return (
    <Box
      sx={{
        display: [visible ? "block" : "none", null, null, "block"],
        gridColumn: [2, null, null, 1],
        height: "28px",
        width: "119px",
      }}
    >
      <Link
        to="/"
        aria-label="Go To Home Page"
        style={{
          display: "flex",
          height: "inherit",
          width: "inherit",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <StyledLogo />
      </Link>
    </Box>
  );
};
