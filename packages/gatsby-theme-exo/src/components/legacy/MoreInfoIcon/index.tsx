/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "@components/GatsbyImage";
import React, { FC } from "react";
import { Button } from "theme-ui";

type moreInfoIconDataType = {
  icon?: any;
};
type moreInfoIconThemeType = {
  infoStyle?: {};
};
type moreInfoIconConfigType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

interface Props {
  moreInfoIconData?: moreInfoIconDataType;
  moreInfoIconTheme?: moreInfoIconThemeType;
  moreInfoIconConfig?: moreInfoIconConfigType;
}
const MoreInfoIcon: FC<Props> = ({
  moreInfoIconData,
  moreInfoIconTheme,
  moreInfoIconConfig,
}) => {
  const { icon } = moreInfoIconData as moreInfoIconDataType;
  const { infoStyle } = moreInfoIconTheme as moreInfoIconThemeType;
  const { onClick } = moreInfoIconConfig as moreInfoIconConfigType;
  return (
    <Button
      aria-label="more info"
      type={"button"}
      role={"button"}
      onClick={onClick}
      sx={{
        ...{
          width: "13px",
          height: "13px",
          display: "flex",
          background: "transparent",
          margin: "0",
          marginLeft: "2px",
          marginTop: "-2px",
          padding: "0",
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
            border: "unset",
            marginLeft: "5px",
            boxShadow:
              "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
          },
        },
        ...infoStyle,
      }}
    >
      <GatsbyImage
        image={icon}
        alt={"info"}
        objectFit="cover"
        sx={{
          width: "13px",
          height: "13px",
        }}
      />
    </Button>
  );
};

export default MoreInfoIcon;
