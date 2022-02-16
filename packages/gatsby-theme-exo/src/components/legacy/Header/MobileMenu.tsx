import * as React from 'react';
import useTimeout from "@hooks/useTimeout";
import { Link } from "gatsby";
import {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Box, Button, Flex, Text } from "theme-ui";
import { AccountIcon, Chevron, Close, StyledHumberger } from "./style";
import { keyframes } from '@emotion/react'
import useWindowSize from "@hooks/useWindowVh";
import useLockedBody from '@hooks/useLockBodyScroll';


interface MenuProps {
  options: { label: string, to?: string, action?: () => void }[];
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  userName?: string;
  hasPrev?: boolean;
  onPrev?: () => void;
}

const MobileMenu: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<MenuProps>
> = (
  { options, isOpen, onClose, onOpen, hasPrev, userName = "Jake", onPrev },
  ref
) => {
  useLockedBody(isOpen)
  useWindowSize()
    const ANIMATION_DURATION = 500;
    const [willUnmount, setWillUnmount] = useState(false);
    const handleOnClose = () => setWillUnmount(true);
    useEffect(() => {
      return () => {
        setWillUnmount(false);
      };
    }, [isOpen]);
    useTimeout(onClose, !willUnmount ? 0 : ANIMATION_DURATION);

    return (
      <>
        <Button
          onClick={onOpen}
          sx={{
            p: 0,
            background: "none",
            color: "black",
            height: 'inherit'
          }}
        >
          <Humberger isOpen={false} />
        </Button>
        {isOpen ? (
          <Box
            ref={ref}
            sx={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "calc(var(--vh, 1vh) * 100)",
              bg: "rgba(36, 42, 82, 1)",
              p: "1.5rem",
              transform: "translateX(-100%)",
              transition: "transofrm 500m",
              animation: `${willUnmount ? closeKeyframe : openKeyframe} 500ms forwards`,
            }}
          >
            <Flex
              sx={{
                color: "white",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={handleOnClose}
                sx={{
                  p: 0,
                  background: "none",
                  height: "24px",
                  width: "24px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Close />
              </Button>
              {!userName ? (
                <AccountIcon />
              ) : (
                <Link to="#">
                  <Text
                    as="p"
                    sx={{
                      fontWeight: 500,
                      fontSize: 24,
                    }}
                  >
                    Hi {userName} !
                  </Text>
                </Link>
              )}
            </Flex>
            <Flex
              sx={{
                flexDirection: "column",
                fontWeight: 600,
                color: "white",
                fontSize: "2rem",
                gap: "56px",
                py: "56px",
              }}
            >
              {hasPrev ? (
                <Button
                  onClick={onPrev}
                  sx={{
                    background: "none",
                    width: "max-content",
                    fontWeight: "inherit",
                    p: 0,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  Back
                </Button>
              ) : null}
              {options.map((option) =>
                option.to ? (
                  <Link key={option.label} to={option.to} onClick={onClose} style={{ width: "max-content" }}>
                    {option.label}
                  </Link>
                ) : (
                  <Button
                      key={option.label}
                    onClick={option.action}
                    sx={{
                      background: "none",
                      width: "max-content",
                      fontWeight: "inherit",
                      fontSize: "inherit",
                      p: 0,
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {option.label}
                      <Chevron $vertical width="16px" />
                  </Button>
                )
              )}
            </Flex>
          </Box>
        ) : null}
      </>
    );
  };

export default forwardRef(MobileMenu);

const Humberger: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <StyledHumberger>
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H18.5C19.3284 3 20 2.32843 20 1.5C20 0.671573 19.3284 0 18.5 0Z" fill="black"/>
            <path d="M18.5 14H1.5C0.671573 14 0 14.6716 0 15.5C0 16.3284 0.671573 17 1.5 17H18.5C19.3284 17 20 16.3284 20 15.5C20 14.6716 19.3284 14 18.5 14Z" fill="black"/>
            <path d="M18.5 7H1.5C0.671573 7 0 7.67157 0 8.5C0 9.32843 0.671573 10 1.5 10H18.5C19.3284 10 20 9.32843 20 8.5C20 7.67157 19.3284 7 18.5 7Z" fill="black"/>
        </svg>
    </StyledHumberger>
  );
};

const openKeyframe = keyframes({
  from: {
    transform: "translateX(-100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});
const closeKeyframe = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(-100%)",
  },
});
