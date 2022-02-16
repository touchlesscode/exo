/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { Flex, Text, ThemeUIStyleObject } from "theme-ui";
import GoBack from "../GoBack";
import { useVehicleContext } from "@contexts/useVehicleContext";
import { useCardViewContext } from "@contexts/CardViewContext";

interface Props {}

const PriceDisclaimer: FC<Props> = () => {
  const { activeView, setPreviousView, selectedMode, setActiveView } =
    useCardViewContext();
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

  const vehicle = useVehicleContext();
  const disclaimerText =
    typeof window !== `undefined`
      ? localStorage.getItem("disclaimer_" + vehicle.vin)
      : "";

  return (
    <Flex sx={startTheme.startWrapper as ThemeUIStyleObject}>
      <GoBack text="Back To Details" title="" />
      <Flex sx={startTheme.rowParent as ThemeUIStyleObject}>
        <Text sx={styles.disclaimer as ThemeUIStyleObject}>
          {disclaimerText}
        </Text>
      </Flex>
    </Flex>
  );
};

const styles = {
  disclaimer: {
    margin: "1rem",
    textAlign: "left",
  },
};

export default PriceDisclaimer;
