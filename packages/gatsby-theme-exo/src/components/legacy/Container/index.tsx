/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Box } from "theme-ui";

type containerDataType = {};
type containerThemeType = {};
type containerConfigType = { [x: string]: any };

interface Props {
  containerData?: containerDataType;
  containerStyle?: containerThemeType;
  containerConfig?: containerConfigType;
  onClick?: () => void;
}
const ContainerShell: FC<Props> = ({
  containerData,
  containerStyle,
  containerConfig,
  children,
  onClick,
}) => {
  const [containerConfigs, setcontainerConfigs] = useState(containerConfig);
  useEffect(() => {
    setcontainerConfigs(containerConfig);
  }, []);
  return (
    <Box
      sx={{
        ...{
          boxSizing: "border-box",
          margin: "0",
          minWidth: "0",
          width: "100%",
          maxWidth: "max-content",
          marginLeft: " auto",
          marginRight: "auto",
        },
        ...containerStyle,
      }}
      onClick={onClick}
      {...(containerConfigs && containerConfigs.wrapperConfig)}
    >
      {children}
    </Box>
  );
};

export default ContainerShell;
