/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "@components/GatsbyImage";
import React, { FC } from "react";
import { Button, Paragraph } from "theme-ui";

type moreInfoIconWithLabelDataType = {
  detailsText?: string;
  detailsIcon?: any;
};
type moreInfoIconWithLabelThemeType = {
  detailsStyle?: {};
  textStyle?: {};
};
type moreInfoIconWithLabelConfigType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

interface Props {
  moreInfoIconWithLabelData?: moreInfoIconWithLabelDataType;
  moreInfoIconWithLabelTheme?: moreInfoIconWithLabelThemeType;
  moreInfoIconWithLabelConfig?: moreInfoIconWithLabelConfigType;
}
const MoreInfoIconWithLabel: FC<Props> = ({
  moreInfoIconWithLabelData,
  moreInfoIconWithLabelTheme,
  moreInfoIconWithLabelConfig,
}) => {
  const { detailsText, detailsIcon } =
    moreInfoIconWithLabelData as moreInfoIconWithLabelDataType;
  const { detailsStyle, textStyle } =
    moreInfoIconWithLabelTheme as moreInfoIconWithLabelThemeType;
  const { onClick } =
    moreInfoIconWithLabelConfig as moreInfoIconWithLabelConfigType;
  return (
    <Button
      aria-label="more info"
      type={"button"}
      role={"button"}
      onClick={onClick}
      sx={{
        ...{
          height: "24px",
          width: "max-content",
          display: "flex",
          background: "transparent",
          marginLeft: "auto",
          marginTop: "2px",
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
            borderRadius: "2px",
            border: "unset",
            boxShadow:
              "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
          },
        },
        ...detailsStyle,
      }}
    >
      <GatsbyImage
        image={detailsIcon}
        alt={"question"}
        objectFit="cover"
        sx={{
          width: "15px",
          height: "15px",
          margin: "auto 4px",
        }}
      />
      <Paragraph
        sx={{
          ...{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: " 500",
            fontSize: "15px",
            lineHeight: "24px",
            textAlign: "right",
            color: "#3a5f96",
            margin: "auto 0",
          },
          ...textStyle,
        }}
      >
        {detailsText}
      </Paragraph>
    </Button>
  );
};

export default MoreInfoIconWithLabel;
