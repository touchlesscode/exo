/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Grid } from "theme-ui";

type gridDataType = {};
type gridThemeType = {};
type gridConfigType = { [x: string]: any };

interface Props {
  gridData?: gridDataType;
  GridStyle?: gridThemeType;
  gridConfig?: gridConfigType;
  onClick?: React.MouseEvent<HTMLElement>;
}
const GridContainer: FC<Props> = ({
  gridData,
  GridStyle,
  gridConfig,
  children,
  onClick,
}) => {
  const [gridConfigs, setgridConfigs] = useState(gridConfig);
  useEffect(() => {
    setgridConfigs(gridConfig);
  }, []);
  return (
    <Grid
      sx={GridStyle}
      onClick={onClick}
      {...(gridConfigs && gridConfigs.wrapperConfig)}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
