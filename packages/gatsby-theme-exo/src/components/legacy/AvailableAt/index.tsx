/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import GatsbyImage from "@components/GatsbyImage";
import React, { FC, useState } from "react";
import { Button, Paragraph, Spinner } from "theme-ui";

type availableAtDataType = {
  availableAtText?: string;
  availableAtLocation?: string;
  availableAtIcon?: any;
};
type availableAtThemeType = {
  availableAtStyle?: {};
  textStyle?: {};
};
type availableAtConfigType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

interface Props {
  availableAtData?: availableAtDataType;
  availableAtTheme?: availableAtThemeType;
  availableAtConfig?: availableAtConfigType;
}
const AvailableAt: FC<Props> = ({
  availableAtData,
  availableAtTheme,
  availableAtConfig,
}) => {
  const { availableAtText, availableAtIcon, availableAtLocation } =
    availableAtData as availableAtDataType;
  const { availableAtStyle, textStyle } =
    availableAtTheme as availableAtThemeType;
  const { onClick } = availableAtConfig as availableAtConfigType;
  const [loading, setLoading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  return (
    <Button
      aria-label="available at"
      type={"button"}
      role={"button"}
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setTimeout(onClick, 0);
        }, 1000);
      }}
      sx={{
        ...{
          height: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: "transparent",
          margin: "24px auto",
          padding: "0",
          cursor: "pointer",
          outline: "none",
          border: "unset",
          boxShadow: "unset",
          transition: "all .3s ease-in-out",
          position: "relative",
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
        ...availableAtStyle,
      }}
    >
      {loading && (
        <Spinner
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            color: "#3a5f96",
          }}
        />
      )}
      <GatsbyImage
        image={availableAtIcon}
        alt={"available at"}
        objectFit="cover"
        sx={{
          width: "15px",
          height: "16px",
          margin: "auto 6px auto 0",
        }}
      />
      <Paragraph
        sx={{
          ...{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: " 500",
            fontSize: "15px",
            lineHeight: "20px",
            display: "flex",
            color: "#3a5f96",
          },
          ...textStyle,
        }}
      >
        {availableAtText} {availableAtLocation}
      </Paragraph>
    </Button>
  );
};

export default AvailableAt;
