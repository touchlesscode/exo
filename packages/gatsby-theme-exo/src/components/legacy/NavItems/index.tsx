import React, { FC, useEffect, useRef, useState } from "react";

import Typography from "@components/Typography";
import Link from "@components/Link";

import { isBrowser } from "@utils/isBrowser";

import useWindowSize from "@hooks/useWindowSize";
import { OptionType } from "@components/type";
import DownArrow from "@assets/images/arrow-down.svg";

import {
  HeaderNavItemsWrapper,
  HeaderNavItem,
  SubNavOptions,
  LinkText,
  NavExpandIconWrapper,
  SidebarNavItemsWrapper,
  SidebarNavItem,
  ButtonWrapper,
  SubNavItem,
  SidebarNavItemsMoreWrapper,
  DropdownContainer,
  DropdownArroImg,
} from "./style";
import { NavItemsPropType, subNavBarOptions } from "./type";

let timer: ReturnType<typeof setTimeout>;

const NavItems: FC<NavItemsPropType> = ({
  options,
  isSidebar,
  showDropdownArrow = true,
  showDropdown = true,
  onNavClick,
  onNavHover,
  navItemAlignment,
  navExpandIcon,
  linkColor,
  setExpandedMore,
}) => {
  const size = useWindowSize();
  const navBarRef = useRef<HTMLDivElement>(null);

  const [expandsidebar, setExpandsidebar] = useState(false);
  const [isExpanded, setIsExpanded] = useState<string | number | null>(null);
  const dropdownOptions = [
    "The Koons Story",
    "Customer Stories",
    "Our Locations",
    "Why Koons Cares",
    "Collision centers",
    "Careers at Koons",
  ];
  const onNavigationHoverHandler = (option: OptionType) => {
    if (timer) clearTimeout(timer);
    if (isExpanded === option.id) return;
    setIsExpanded(option.id);
    onNavHover && onNavHover(option);
  };
  const onNavigationLeaveHandler = () => {
    // debugger;

    timer = setTimeout(() => setIsExpanded(null), 500);
  };

  const onNavigationClickHandler = (option: OptionType) => {
    setIsExpanded(option.id);
    onNavClick && onNavClick(option);
  };

  const onFocusHandler = (option: OptionType) => {
    if (isExpanded !== option.id) setIsExpanded(null);
  };
  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  const handleTabKey = (e: KeyboardEvent) => {
    if (!navBarRef.current) return;
    const focusableModalElements = (
      Array.from(
        navBarRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
      ) as Array<HTMLElement>
    ).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    // if (
    //   focusableModalElements.indexOf(document.activeElement as HTMLElement) ===
    //   -1 ) {

    //   return onCloseHandler()

    // }
    if (!e.shiftKey && document.activeElement === lastElement) {
      return onCloseHandler();
    }
    // if (e.shiftKey && document.activeElement === firstElement) {
    //     lastElement.focus();
    //     e.preventDefault();
    // }
  };

  const onCloseHandler = () => {
    setIsExpanded(null);
  };

  const keyListenersMap = new Map([
    [27, onCloseHandler],
    [9, handleTabKey],
  ]);
  const linkStyle = {
    container: {
      "&:hover": {
        background: "rgba(36, 42, 82, 0.1)",
      },
    },
    topText: {
      fontSize: "0.875rem",
      lineHeight: "1.313rem",
      fontWeight: "medium",
      color: "rgba(36, 42, 82, 1)",
      "&:hover": {
        background: "rgba(36, 42, 82, 0.1)",
      },
    },
    titleLeft: {
      fontSize: "1.25rem",
      lineHeight: "1.375rem",
      fontWeight: "600",
      color: "#333333",
    },
  };
  if (isSidebar && !expandsidebar) {
    return (
      <SidebarNavItemsWrapper>
        {options &&
          options.map((option) => (
            <SidebarNavItem>
              {option.url ? (
                <Link to={option.url}>
                  <Typography
                    type="p7"
                    color="white"
                    fontSize="32px"
                    fontWeight="500"
                  >
                    {option.label}
                  </Typography>
                </Link>
              ) : (
                <ButtonWrapper
                  onFocus={(e: any) => {
                    setExpandsidebar(true);
                    setExpandedMore(true);
                  }}
                >
                  <Typography
                    type="p7"
                    color="white"
                    fontSize="32px"
                    fontWeight="500"
                  >
                    {option.label}
                  </Typography>
                </ButtonWrapper>
              )}
            </SidebarNavItem>
          ))}
      </SidebarNavItemsWrapper>
    );
  } else if (expandsidebar) {
    return (
      <SidebarNavItemsWrapper style={{ gap: "3rem" }}>
        <p
          onClick={() => {
            setExpandsidebar(false);
            setExpandedMore(false);
          }}
        >
          <Typography type="p7" color="white" fontSize="32px" fontWeight="500">
            {" "}
            Back
          </Typography>
        </p>
        {dropdownOptions &&
          dropdownOptions.map((option) => {
            return (
              <SidebarNavItem key={option} style={{ paddingLeft: "0px" }}>
                <Link to={option}>
                  <Typography
                    type="p7"
                    color="white"
                    fontSize="32px"
                    fontWeight="500"
                  >
                    {option}
                  </Typography>
                </Link>
              </SidebarNavItem>
            );
          })}
      </SidebarNavItemsWrapper>
    );
  }

  return (
    <HeaderNavItemsWrapper screenType={size.type} theme={linkStyle}>
      {options &&
        options.map((option) => {
          const isExpandable =
            option.subNavOptions && option.subNavOptions?.length > 0;
          return (
            <HeaderNavItem
              key={option.id}
              onMouseEnter={() => onNavigationHoverHandler(option)}
              onMouseLeave={() => onNavigationLeaveHandler()}
              onFocus={() => onFocusHandler(option)}
              onClick={() => onNavigationClickHandler(option)}
              expanded={isExpanded === option.id}
              isExpandable={isExpandable}
              ref={navBarRef}
            >
              {option.url && !isExpandable ? (
                <Link to={option.url}>
                  <LinkText isTitle>
                    <Typography
                      name="link-text"
                      type="p8"
                      style={{
                        color: linkColor
                      }}
                    >
                      {option.label}
                    </Typography>
                  </LinkText>
                </Link>
              ) : (
                <DropdownContainer>
                  <LinkText isTitle>
                    <Typography
                      name="link-text"
                      type="p8"
                      style={{ color: "#242A52" }}
                    >
                      {option.label}
                    </Typography>
                    {showDropdownArrow && isExpandable && (
                      <DropdownArroImg
                        src={navExpandIcon || DownArrow}
                        alt=""
                      />
                    )}
                  </LinkText>
                </DropdownContainer>
              )}
              <SubNavOptions
                expanded={isExpanded === option.id}
                isExpandable={isExpandable}
              >
                {dropdownOptions.map((item: any) => {
                  return (
                    <SubNavItem key={item}>
                      <Link
                        to="/"
                        style={{
                          ...{
                            fontSize: "16px",
                            lineHeight: "30px",
                            paddingLeft: "16px",
                          },
                          ...linkStyle.topText,
                        }}
                      >
                        {item}
                      </Link>
                    </SubNavItem>
                  );
                })}
              </SubNavOptions>
            </HeaderNavItem>
          );
        })}
    </HeaderNavItemsWrapper>
  );
};

export default NavItems;
