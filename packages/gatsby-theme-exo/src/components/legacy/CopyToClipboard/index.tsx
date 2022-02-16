/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Text, Button } from "theme-ui";
import useWindowSize from "@hooks/useWindowSize";
import GatsbyImage from "@components/GatsbyImage";

type copyToClipboardDataType = {
  title?: string;
  value?: string;
  icon?: any;
};
type copyToClipboardThemeType = {
  arrowStyle?: {};
  textStyle?: {};
  iconStyle?: {};
  buttonStyle?: {};
};

interface Props {
  copyToClipboardData: copyToClipboardDataType;
  copyToClipboardTheme: copyToClipboardThemeType;
}
const CopyToClipboard: FC<Props> = ({
  copyToClipboardData,
  copyToClipboardTheme,
  children,
}) => {
  const { title, value, icon } = copyToClipboardData as copyToClipboardDataType;
  const { arrowStyle, textStyle, iconStyle, buttonStyle } =
    copyToClipboardTheme as copyToClipboardThemeType;
  const isMobile = useWindowSize().type === "sm";
  const [isMobileSize, setIsMobileSize] = useState(isMobile);
  const [loadOnce, setLoadOnce] = useState(true);
  useEffect(() => {
    isMobile || loadOnce ? setIsMobileSize(true) : setIsMobileSize(false);
    setLoadOnce(false);
  }, [isMobile, loadOnce]);
  const [showCopyIcon, setShowCopyIcon] = useState(false);
  const [showTip, setShowTip] = useState(false);
  return (
    <Button
      sx={{ ...buttonStyle, ...{ display: "flex", flexDirection: "row" } }}
      onMouseEnter={() => (!isMobileSize ? setShowCopyIcon(true) : {})}
      onMouseLeave={() => (!isMobileSize ? setShowCopyIcon(false) : {})}
      onFocus={() => (!isMobileSize ? setShowCopyIcon(true) : {})}
      onBlur={() => (!isMobileSize ? setShowCopyIcon(false) : {})}
      onClick={() => {
        setShowTip(true);
        setTimeout(() => setShowTip(false), 1000);
        navigator.clipboard.writeText(value as string);
      }}
    >
      {showTip ? (
        <Text sx={textStyle}>
          {title + " copied"}
          <Text sx={arrowStyle}></Text>
        </Text>
      ) : null}

      {showCopyIcon && icon ? (
        <GatsbyImage
          image={icon}
          alt={"clipboard"}
          objectFit="cover"
          sx={{
            height: "17px",
            width: "14px",
            margin: "auto 3px auto auto",
          }}
        />
      ) : null}
      {children}
    </Button>
  );
};

export default CopyToClipboard;
