/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { Button, Flex, Text, ThemeUIStyleObject } from "theme-ui";
import GatsbyImage from "@components/GatsbyImage";
import { useCardViewContext } from "@contexts/CardViewContext";
import GoBack from "../GoBack";
import down from "@assets/images/down.svg";

interface Props {
  listData: {
    backDetails: {
      text: string;
    };
    title: string;
    listArray: {
      icon: any;
      header: string;
      name: string;
    }[];
  };
}

const GetStarted: FC<Props> = (props) => {
  const { listData } = props;
  const {
    activeView,
    selectedMode,
    setSelectedMode,
    previousView,
    setPreviousView,
    setActiveView,
  } = useCardViewContext();
  const startTheme = {
    startWrapper: {
      flexDirection: "column",
    },
    rowParent: {
      width: "100%",
      maxWidth: "100%",
      justifyContent: "space-between",
    },
    listContainer: {
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "24px 0",
      width: "100%",
    },
    listParent: {
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "0 0 12px",
    },
    listItem: {
      width: "100%",
      height: "56px",
      backgroundColor: "#f2f2f2",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      padding: "16px 20px 16px 16px",
      position: "relative",
      cursor: "pointer",
      marginBottom: "12px",
      outline: "none",
      border: "unset",
      boxShadow: "unset",
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
      "&::after": {
        content: '""',
        display: "block",
        background: `url(${down}) center/cover no-repeat`,
        width: "10px",
        height: "6px",
        position: "absolute",
        top: " 50%",
        right: "20px",
        transform: "translate(0, -50%)",
      },
      "&.active::after": {
        transform: "translate(0, -50%) rotateZ(-90deg)",
      },
      "@media screen and (max-width: 768px)": {
        maxWidth: "100%",
      },
    },
    title: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.02em",
      color: "#333333",
      textAlign: "left",
    },
    icon: {
      width: "18px",
      height: "18px",
      margin: "auto 10px auto 0",
    },
  };
  return (
    <Flex sx={startTheme.startWrapper as ThemeUIStyleObject}>
      <GoBack text={listData.backDetails.text} title={listData.title} />
      <Flex sx={startTheme.rowParent as ThemeUIStyleObject}>
        <Flex sx={startTheme.listContainer as ThemeUIStyleObject}>
          {listData.listArray.map((listItem, index) => (
            <Flex
              key={"listItem" + index}
              sx={startTheme.listParent as ThemeUIStyleObject}
            >
              <Button
                sx={startTheme.listItem as ThemeUIStyleObject}
                onClick={() => {
                  setPreviousView({
                    ...previousView,
                    [listItem.name]: {
                      prev: activeView,
                      selectedMode: selectedMode,
                    },
                  });
                  setActiveView(listItem.name);
                  setSelectedMode("full");
                }}
              >
                <GatsbyImage
                  image={listItem.icon}
                  alt={listItem.header}
                  objectFit="cover"
                  sx={startTheme.icon as ThemeUIStyleObject}
                />
                <Text sx={startTheme.title as ThemeUIStyleObject}>
                  {listItem.header}
                </Text>
              </Button>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GetStarted;
