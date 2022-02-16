/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState } from "react";
import GoBack from "@components/GoBack";
import { ThemeUIStyleObject, Flex } from "theme-ui";
import { useIconListContext } from "@contexts/useIconListContext";
import Call from "@components/Call";
import Chat from "@components/Chat";
import Follow from "@components/Follow";
import ChatStep from "@components/ChatStep";
import FollowStep from "@components/FollowStep";
import { useCardViewContext } from "@contexts/CardViewContext";

interface Props {}
const TalkToSomeone: FC<Props> = (props) => {
  const iconList = useIconListContext();
  const {
    activeView,
    selectedMode,
    previousView,
    setPreviousView,
    setActiveView,
    setSelectedMode,
  } = useCardViewContext();
  const [name, setName] = useState("");
  return (
    <Flex sx={theme.talkToSomeoneWrapper as ThemeUIStyleObject}>
      {activeView === "questions" ? (
        <React.Fragment>
          <GoBack text="Go Back" title="Talk to Someone" />
          <Call theme={theme} icon={iconList.call?.image} />
          <Chat
            onClick={() => {
              setPreviousView({
                ...previousView,
                chat: {
                  prev: activeView,
                  selectedMode: selectedMode,
                },
              });
              setActiveView("chat");
              setSelectedMode("full");
            }}
            theme={theme}
            icon={iconList.text?.image}
          />
          <Follow
            onClick={() => {
              setPreviousView({
                ...previousView,
                follow: {
                  prev: activeView,
                  selectedMode: selectedMode,
                },
              });
              setActiveView("follow");
              setSelectedMode("full");
            }}
            theme={theme}
            icon={iconList.request?.image}
          />
        </React.Fragment>
      ) : activeView === "chat" ? (
        <ChatStep theme={theme} setName={setName} />
      ) : activeView === "follow" ? (
        <FollowStep name={name} theme={theme} setName={setName} />
      ) : null}
    </Flex>
  );
};

const theme = {
  talkToSomeoneWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  contactUs: {
    display: "flex",
    flexDirection: " column",
    width: "100%",
    background: "#f2f2f2",
    borderRadius: "8px",
    marginTop: "24px",
    "@media screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  sectionHeader: {
    padding: "16px",
    cursor: "pointer",
  },
  sectionContent: {
    padding: "12px",
    background: "#f2f2f2",
    borderRadius: "8px",
    margin: "27px 0",
  },
  rowParent: {
    display: "flex",
    flexDirection: "row",
    justifyCntent: "flex-start",
  },
  rowContent: {
    width: "100%",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-0.02em",
    color: "#4f4f4f",
    paddingLeft: "0",
  },
  rowTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.02em",
    color: "#333333",
  },
  rowImg: {
    width: "20px",
    height: " 20px",
    margin: "auto 8px auto 0",
  },
  radioText: {
    marginRight: "auto",
  },
  radioLabel: {
    maxWidth: "145px",
    width: "48%",
    height: "36px",
    display: "flex",
    flexDirection: "row",
    background: "#ffffff",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    justifyContent: "center",
    padding: "9px 0",
    cursor: "pointer",
    "&.checked": {
      background:
        "linear-gradient( 0deg, rgba(58, 95, 150, 0.15), rgba(58, 95, 150, 0.15)  ), #ffffff",
      border: "1px solid #3a5f96",
      color: "#3a5f96",
      "&.clicked": {
        border: "unset",
        borderRadius: "2px",
        boxShadow: "0 0 0 2px #eca400 !important",
      },
    },
  },
  formLabel: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "115%",
    letterSpacing: "0.01em",
    color: "#2d2d2d",
  },
  radioInput: {
    width: "14px",
    height: "14px",
    marginRight: "6px",
    marginLeft: "18px",
    "&:focus": {
      border: "unset",
      borderRadius: "50% !important",
      boxShadow: "0 0 0 2px #eca400 !important",
      outline: "unset",
    },
  },
  toggleRadioLabel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: " 115%",
    letterSpacing: "0.01em",
    color: "#2d2d2d",
    margin: "5px 0 24px",
  },
  field: {
    width: "100%",
    height: " 40px",
    background: "#ffffff !important",
    backgroundColor: "#ffffff !important",
    border: "1px solid #e6e6e6",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "10px 36px 10px 16px !important",
    margin: "5px 0 24px !important",
    outline: "none",
    boxShadow: "unset",
    "&:hover": {
      border: "1px solid #e6e6e6",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: " none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important; !important",
    },
  },
  contact: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    display: "inline",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#3a5f96",
    textDecoration: "unset",
    outline: "none",
    border: "unset",
    boxShadow: "unset !important",
    "&:hover": {
      border: "unset",
      boxShadow: "unset !important",
    },
    " &:focus": {
      outline: "none",
      borderRadius: "2px",
      boxShadow:
        " 0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important; !important",
    },
  },
  formFields: { display: "flex", flexDirection: "column", marginTop: "6px" },
  hash: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    display: "inline",
    alignItems: "center",
    letterSpacing: " -0.02em",
    color: "#333333",
  },
};

export default TalkToSomeone;
