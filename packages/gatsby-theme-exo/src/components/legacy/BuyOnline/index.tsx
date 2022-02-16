/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { useCardViewContext } from "@contexts/CardViewContext";
import GoBack from "../GoBack";
import { Box } from "theme-ui";

type buyDataType = {
  header: string;
  backDetails: {
    text: string;
    target: string;
  };
};
type buyOnlineThemeType = {
  buyOnlineWrapper?: {};
};
interface Props {
  buyData: buyDataType;
  buyOnlineTheme?: buyOnlineThemeType;
}

const BuyOnline: FC<Props> = ({ buyData, buyOnlineTheme }) => {
  const { buyOnlineWrapper } = buyOnlineTheme as buyOnlineThemeType;
  const { setActiveView, setSelectedMode } = useCardViewContext();
  return (
    <Box sx={buyOnlineWrapper}>
      <GoBack text={buyData.backDetails.text} title={buyData.header} />
    </Box>
  );
};

export default BuyOnline;
