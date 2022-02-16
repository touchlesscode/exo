import React, { FC, useEffect, useRef, useState } from "react";

import NavItems from "@components/NavItems";
import ImageContainer from "@components/ImageContainer";
import Backdrop from "@components/Backdrop";
import Typography from "@components/Typography";
import Link from "@components/Link";

import useWindowSize from "@hooks/useWindowSize";

import {
  SidebarWrapper,
  TopIconWrapper,
  NavItemsWrapper,
  FooterLinkWrapper,
  FooterLinkItem,
  SocialMediaLinkWrapper,
  SocialMediaLink,
} from "./style";
import { SidebarPropType } from "./type";
import { useSelector } from "react-redux";
import whiteicon from "@assets/images/whiteicon.svg";
const Sidebar: FC<SidebarPropType> = ({
  open,
  fullSideBar,

  leftIcon,
  leftIconHeight,
  leftIconWidth,
  leftIconMargin,
  onLeftIconClick,
  // ExpandedMore,
  rightIcon,
  rightIconHeight,
  rightIconWidth,
  onRightIconClick,

  options,
  navItemAlignment,
  navExpandIcon,
  footerLinks,
  socialMediaLinks,
}) => {
  const size = useWindowSize();
  const sideBarRef = useRef<HTMLDivElement>(null);
  const showFilters = true
  const [ExpandedMore, setExpandedMore] = useState(false);
  const [close, setClose] = useState(open);
  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, []);

  const handleTabKey = (e: KeyboardEvent) => {
    if (!sideBarRef.current) return;
    const focusableModalElements = (
      Array.from(
        sideBarRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
      ) as Array<HTMLElement>
    ).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (
      focusableModalElements.indexOf(document.activeElement as HTMLElement) ===
      -1
    ) {
      firstElement.focus();
      return e.preventDefault();
    }
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  const onCloseHandler = () => {
    onRightIconClick && onRightIconClick();
    onLeftIconClick && onLeftIconClick();
  };

  const keyListenersMap = new Map([
    [27, onCloseHandler],
    [9, handleTabKey],
  ]);

  if (size.type !== "lg") {
    onRightIconClick && onRightIconClick();
  }

  if (!open) return null;

  return (
    <>
      <Backdrop onClick={onRightIconClick} />
      <SidebarWrapper
        aria-hidden={showFilters ? true : false}
        tabIndex={showFilters ? -1 : 0}
        ref={sideBarRef}
        tabIndex={0}
        role="dialog"
        aria-modal="true"
        aria-hidden="false"
        fullSideBar={fullSideBar}
        open={open}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          {leftIcon && (
            <TopIconWrapper
              position="left"
              onClick={onLeftIconClick}
              margin={leftIconMargin}
              iconWidth={leftIconWidth}
              iconHeight={leftIconHeight}
            >
              <ImageContainer source={leftIcon} alt="leftIcon" />
            </TopIconWrapper>
          )}
          {ExpandedMore === true ? (
            <Typography type="p7" color="white" fontSize="24px">
              Hi Jake!
            </Typography>
          ) : (
            <img src={whiteicon} />
          )}
        </div>

        {rightIcon && (
          <TopIconWrapper
            position="right"
            onClick={onRightIconClick}
            margin={leftIconMargin}
            iconWidth={rightIconWidth}
            iconHeight={rightIconHeight}
          >
            <ImageContainer source={rightIcon} alt="rightIcon" />
          </TopIconWrapper>
        )}
        <NavItemsWrapper>
          <NavItems
            navExpandIcon={navExpandIcon}
            navItemAlignment={navItemAlignment}
            options={options}
            isSidebar
            setExpandedMore={setExpandedMore}
          />
        </NavItemsWrapper>
        {/* {footerLinks && <FooterLinkWrapper>
                    {footerLinks.map(link => {
                        return (
                            <Link style={{ flex: '1 0 33%'}} key={link.id} to={link.url}>
                                <FooterLinkItem>
                                    {link.icon && <ImageContainer source={link.icon} alt={link.label} />}
                                    <Typography type="p4" color="white">
                                        {link.label}
                                    </Typography>
                                </FooterLinkItem>
                            </Link>
                        );
                    })}
                </FooterLinkWrapper>} */}
        {/* {socialMediaLinks && <SocialMediaLinkWrapper>
                    {socialMediaLinks.map((item, index) => {
                        return (
                            <SocialMediaLink key={index} to={item.url}>
                                <img src={item.icon} alt="" />
                            </SocialMediaLink>
                        )
                    })}
                </SocialMediaLinkWrapper>} */}
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
