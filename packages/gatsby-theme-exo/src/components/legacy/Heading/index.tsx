/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Heading, ThemeUIStyleObject, HeadingProps } from "theme-ui";

type headingConfigType = {
  textConfig?: {
    [x: string]: any;
  };
};

interface Props {
  headingConfig?: headingConfigType;
  sx?: ThemeUIStyleObject;
  as?: React.ElementType<any>;
  children?: React.ReactNode;
  props?: HeadingProps;
}
const Typography: FC<Props> = ({ headingConfig, ...props }) => {
  const [headingConfigs, setheadingConfigs] = useState(headingConfig);
  const { children, sx, as = "p", ...rest } = props;
  useEffect(() => {
    setheadingConfigs(headingConfig);
  }, []);
  return (
    <Heading
      {...rest}
      as={as}
      sx={{
        ...{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontSize: `${
            as === "h1"
              ? "32px"
              : as === "h2"
              ? "24px"
              : as === "h3"
              ? "18px"
              : as === "h4"
              ? "16px"
              : as === "h5"
              ? "13px"
              : as === "h6"
              ? "11px"
              : "inherit"
          }`,
          color: "#151F2A",
        },
        ...sx,
      }}
      {...(headingConfigs && headingConfigs.textConfig)}
    >
      {children}
    </Heading>
  );
};

export default Typography;
