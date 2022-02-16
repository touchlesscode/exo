/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Button } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
interface carouselArrowProps {
  show: boolean;
  disabled: boolean;
  direction: "left" | "right";
  onClick?: (e: any) => void;
}

const CarouselArrow: React.FC<carouselArrowProps> = ({
  disabled,
  direction,
  onClick,
  show,
  ...props
}) => {
  return (
    <Button
      role="button"
      type="button"
      onClick={onClick}
      sx={{
        ...{
          position: "absolute",
          top: "50%",
          left: `${direction === "left" ? "24px" : "unset"}`,
          right: `${direction === "left" ? "unset" : "24px"}`,
          transform: `${
            direction === "left"
              ? "translateY(-50%)"
              : "translateY(-50%) rotateY(180deg)"
          }`,
          "WebkitTransform": `${
            direction === "left"
              ? "translateY(-50%)"
              : "translateY(-50%) rotateY(180deg)"
          }`,
          height: "28px",
          width: "28px",
          borderRadius: "50%",
          padding: "0",
          backgroundColor: "transparent",
          border: "unset",
          margin: 0,
          opacity: `${disabled ? ".3" : "1"}`,
          display: `${show ? "block" : "none"}`,
          cursor: "pointer",
          outline: "none",
          boxShadow: "unset",
          transition: "all .3s ease-in-out",
          justifyContent: "center",
          alignItems: "center",
          textalign: "center",
          "&:hover": {
            outline: "none",
            border: "unset",
            boxShadow: "unset !important",
          },
          "&:focus": {
            outline: "none",
            border: "unset",
            boxShadow:
              "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
          },
          "&:disabled": {
            opacity: "0.6",
            cursor: "not-allowed",
          },
        },
      }}
      {...props}
    >
      <StaticImage
        src={"../../assets/icons/arrow-left_v3.svg"}
        width={28}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="left"
      />
    </Button>
  );
};
export default CarouselArrow;
