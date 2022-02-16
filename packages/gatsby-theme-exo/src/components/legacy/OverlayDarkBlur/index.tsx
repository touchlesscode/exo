/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { Button } from "theme-ui";

interface overlayDarkBlurProps {
  show: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const OverlayDarkBlur: FC<overlayDarkBlurProps> = ({ show, onClick }) => {
  return (
    <Button
      aria-label="button"
      type={"button"}
      role={"button"}
      onClick={onClick}
      tabIndex={show ? 0 : -1}
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "calc(var(--vh, 1vh) * 100)",
        borderRadius: "0",
        zIndex: "13",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(3px)",
        pointerEvents: `${show ? "auto" : "none"}`,
        transition: "all 120ms cubic-bezier(0.17, 0.04, 0.03, 0.94)",
        opacity: `${show ? "1" : "0"}`,
        cursor: "pointer",
        outline: "none",
        border: "unset",
        boxShadow: "unset",
        WebkitTapHighlightColor: "transparent",
        willChange: `${show ? "opacity" : "unset"}`,
        userSelect: "none",
        overscrollBehavior: "none",
        msScrollChaining: "none",
        WebkitTouchCallout: "none",
        "&:hover": {
          outline: "none",
          border: "unset",
          boxShadow: "unset !important",
          WebkitTapHighlightColor: "transparent",
        },
        "&:focus": {
          outline: "none",
          border: "unset",
          boxShadow: "unset!important",
          WebkitTapHighlightColor: "transparent",
        },
      }}
    ></Button>
  );
};

export default OverlayDarkBlur;
