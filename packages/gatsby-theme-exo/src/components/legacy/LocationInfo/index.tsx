/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { Box } from "theme-ui";
import { useCardViewContext } from "@contexts/CardViewContext";
import GoBack from "@components/GoBack";

type locationInfoDataType = {
  header: string;
  backDetails: {
    text: string;
    target: string;
  };
};
type locationInfoThemeType = {
  locationInfoWrapper?: {};
};
interface Props {
  locationInfoData: locationInfoDataType;
  locationInfoTheme?: locationInfoThemeType;
}

const LocationInfo: FC<Props> = ({ locationInfoData, locationInfoTheme }) => {
  const { locationInfoWrapper } = locationInfoTheme as locationInfoThemeType;
  const { setActiveView, setSelectedMode } = useCardViewContext();
  return (
    <Box sx={locationInfoWrapper}>
      <GoBack
        text={locationInfoData.backDetails.text}
        title={locationInfoData.header}
      />
    </Box>
  );
};

export default LocationInfo;
