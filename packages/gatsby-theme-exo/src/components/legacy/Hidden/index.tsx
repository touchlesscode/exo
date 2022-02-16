/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Box } from "theme-ui";

type hiddenDataType = boolean;
type hiddenThemeType = {};
type hiddenConfigType = { [x: string]: any };

interface Props {
  hidden?: hiddenDataType;
  hiddenStyle?: hiddenThemeType;
  hiddenConfig?: hiddenConfigType;
  onClick?: React.MouseEvent<HTMLElement>;
}
const Hidden: FC<Props> = ({
  hidden = true,
  hiddenStyle,
  hiddenConfig,
  children,
  onClick,
}) => {
  const [hiddenConfigs, sethiddenConfigs] = useState(hiddenConfig);
  useEffect(() => {
    sethiddenConfigs(hiddenConfig);
  }, []);
  return (
    <Box
      sx={{ display: `${hidden ? "none" : "block"}`, ...hiddenStyle }}
      onClick={onClick}
      {...(hiddenConfigs && hiddenConfigs.wrapperConfig)}
    >
      {children}
    </Box>
  );
};

export default Hidden;
