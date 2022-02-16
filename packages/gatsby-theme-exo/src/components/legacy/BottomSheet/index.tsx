/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useRef, useState, useEffect } from "react";
import { Box, Flex } from "theme-ui";
import useWindowVh from "@hooks/useWindowVh";
import useSwipeable from "@hooks/useSwipeable";
interface bottomSheetProps {
  open?: boolean;
  styles?: {};
  dismissTo?: "top" | "bottom";
  onClick: any;
}

const BottomSheet: FC<bottomSheetProps> = ({
  open,
  styles,
  dismissTo,
  onClick,
  children,
}) => {
  useWindowVh();
  const bottomSheetRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [show, setShow] = useState(open || false);
  useEffect(() => {
    if (typeof open === "boolean") setShow(open);
  }, [open]);
  const handlers = useSwipeable({
    onSwipedUp: (e) => onClick(e),
  });
  return (
    <Box
      onClick={onClick}
      role="dialog"
      aria-label="Modal"
      aria-modal="true"
      ref={bottomSheetRef as React.MutableRefObject<HTMLDivElement>}
      sx={{
        ...{
          touchAction: "pan-y",
          position: "fixed",
          bottom: `${
            show ? "0" : !dismissTo || dismissTo === "bottom" ? "-100%" : "0"
          }`,
          left: "0",
          opacity: `${show ? "1" : "0"}`,
          width: "100vw",
          height: "max-content",
          borderRadius: "10px 10px 0px 0px",
          boxShadow: "0 -12px 30px rgba(58, 58, 58, 0.2)",
          backgroundColor: "white",
          pointerEvents: `${show ? "auto" : "none"}`,
          outline: " none",
          border: "unset",
          padding: "0",
          zIndex: "9",
          transition: `${
            !dismissTo || dismissTo === "bottom"
              ? "bottom 120ms cubic-bezier(0.17, 0.04, 0.03, 0.94), opacity 120ms cubic-bezier(0.17, 0.04, 0.03, 0.94)"
              : "opacity 120ms cubic-bezier(0.17, 0.04, 0.03, 0.94)"
          }`,

          willChange: `${show ? "bottom, opacity" : "unset"}`,
          userSelect: "none",
          overscrollBehavior: "none",
          msScrollChaining: "none",
          WebkitTapHighlightColor: "transparent",
          WebkitTouchCallout: "none",
          "&:hover": {
            outline: "none",
            border: "unset",
            boxShadow: "0 -12px 30px rgba(58, 58, 58, 0.2) !important",
            WebkitTapHighlightColor: "transparent",
          },
          "&:focus": {
            outline: "none",
            border: "unset",
            boxShadow: "0 -12px 30px rgba(58, 58, 58, 0.2) !important",
            WebkitTapHighlightColor: "transparent",
          },
        },
        ...styles,
      }}
    >
      <Box {...handlers}>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            padding: "11px 0 24px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "3px",
              width: "50px",
              background: "rgb(216, 216, 216)",
              borderRadius: "0.3rem",
              margin: "0 auto",
            }}
          ></Box>
        </Flex>
        {children}
      </Box>
    </Box>
  );
};
export default BottomSheet;
