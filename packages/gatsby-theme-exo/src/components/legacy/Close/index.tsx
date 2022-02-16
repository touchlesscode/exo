/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Button } from "theme-ui";
import { IGatsbyImageData } from "gatsby-plugin-image";
import GatsbyImage from "@components/GatsbyImage";
import { useIconListContext } from "@contexts/useIconListContext";

type sourceType = {
  id: number;
  name: string;
  image: {
    asset: IGatsbyImageData;
  };
};
type CloseDataType = {};
type CloseThemeType = {
  closeStyle?: {};
};
type CloseConfigType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  align?: "right" | "center" | "left";
  closeIcon?: "dark" | "white";
};

interface CloseProps {
  closeData?: CloseDataType;
  closeTheme?: CloseThemeType;
  closeConfig?: CloseConfigType;
  ref?: React.ForwardedRef<HTMLButtonElement>;
  show?: boolean;
}

const Close: React.FC<CloseProps> = React.forwardRef(
  ({ closeTheme, closeData, closeConfig, show, ...props }, ref) => {
    const iconsList = useIconListContext();

    // const {} = closeData as CloseDataType;
    const { closeStyle } = closeTheme as CloseThemeType;
    const { onClick, align, closeIcon } = closeConfig as CloseConfigType;

    const btnRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
      btnRef.current?.focus();
    }, []);

    return (
      <Button
        onClick={onClick}
        tabIndex={show ? 0 : -1}
        aria-label="Close Modal"
        type={"button"}
        role={"button"}
        ref={ref ? ref : btnRef}
        sx={{
          ...{
            padding: "10px",
            display: "flex",
            background: "transparent",
            margin: `${
              align === "right"
                ? "auto 24px auto auto"
                : align === "center"
                ? "auto"
                : align === "left"
                ? "auto auto auto 24px"
                : "auto"
            }`,
            cursor: "pointer",
            outline: "none",
            border: "unset",
            boxShadow: "unset",
            transition: "all .3s ease-in-out",
            "&:hover": {
              outline: "none",
              border: "unset",
              boxShadow: "unset !important",
            },
            "&:focus": {
              outline: "none",
              borderRadius: "50%",
              margin: `${
                align === "right"
                  ? "auto 21px auto auto"
                  : align === "center"
                  ? "auto"
                  : align === "left"
                  ? "auto auto auto 21px"
                  : "auto"
              }`,
              border: "unset",
              boxShadow:
                "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
            },
          },
          ...closeStyle,
        }}
        {...props}
      >
        {!closeIcon || closeIcon === "dark" ? (
          <GatsbyImage
            image={iconsList.close_grey?.image}
            loading="eager"
            alt="close"
          />
        ) : (
          <GatsbyImage
            image={iconsList.close_white?.image}
            loading="eager"
            alt="close"
          />
        )}
      </Button>
    );
  }
);

export default Close;
