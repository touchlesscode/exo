/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Heading } from "theme-ui";

type textHeaderModalDataType = {
  title?: string;
};
type textHeaderModalThemeType = {
  titleStyle?: {};
};
type textHeaderModalConfigType = {
  textConfig?: {
    [x: string]: any;
  };
};

interface Props {
  textHeaderModalData?: textHeaderModalDataType;
  textHeaderModalTheme?: textHeaderModalThemeType;
  textHeaderModalConfig?: textHeaderModalConfigType;
}
const TextHeaderModal: FC<Props> = ({
  textHeaderModalData,
  textHeaderModalTheme,
  textHeaderModalConfig,
}) => {
  const { title } = textHeaderModalData as textHeaderModalDataType;
  const { titleStyle } = textHeaderModalTheme as textHeaderModalThemeType;
  const [textHeaderModalConfigs, settextHeaderModalConfigs] = useState(
    textHeaderModalConfig
  );
  useEffect(() => {
    settextHeaderModalConfigs(textHeaderModalConfig);
  }, []);
  return (
    <Heading
      as="h3"
      sx={{
        ...{
          position: "absolute",
          width: "calc(100% - 100px)",
          top: "24px",
          left: "50%",
          transform: "translate(-50%, 0)",
          margin: "auto",
          fonFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "29px",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          letterSpacing: "-0.02em",
          color: "#151F2A",
        },
        ...titleStyle,
      }}
      {...(textHeaderModalConfigs && textHeaderModalConfigs.textConfig)}
    >
      {title}
    </Heading>
  );
};

export default TextHeaderModal;
