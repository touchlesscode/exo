/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";

import { Flex, Button, ThemeUIStyleObject, Text } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import { useCardViewContext } from "@contexts/CardViewContext";

interface Props {
  text: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const goBackTheme = {
  parent: {
    flexDirection: "column",
    paddingTop: "15px",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: "24px",
    padding: "0",
    cursor: "pointer",
    outline: "none",
    border: "unset",
    boxShadow: "unset",
    background: "transparent",
    backgroundColor: "transparent",
    marginRight: "auto",
    "&:hover": {
      outline: "none",
      border: "unset",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: "none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
    },
  },
  backText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#3a5f96",
    whiteSpace: "nowrap",
  },
  backImg: {
    width: "auto",
    minWidth: "6px",
    height: "10px",
    margin: "auto 8px auto 0",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "29px",
    letterSpacing: "-0.02em",
    color: "#151f2a",
    textAlign: "left",
  },
};
const GoBack: FC<Props> = (props) => {
  const { text, title, onClick } = props;
  const { activeView, setActiveView, setSelectedMode, previousView } =
    useCardViewContext();
  return (
    <Flex sx={goBackTheme.parent as ThemeUIStyleObject}>
      <Button
        sx={goBackTheme.button as ThemeUIStyleObject}
        onClick={() => {
          onClick && onClick;
          setActiveView(previousView[activeView].prev);
          setSelectedMode(previousView[activeView].selectedMode);
        }}
      >
        <StaticImage
          src="../../assets/images/back.svg"
          width={5}
          height={9}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="back"
          style={goBackTheme.backImg}
        />
        <Text sx={goBackTheme.backText as ThemeUIStyleObject}>{text}</Text>
      </Button>
      <Text sx={goBackTheme.title as ThemeUIStyleObject}>{title}</Text>
    </Flex>
  );
};

export default GoBack;
