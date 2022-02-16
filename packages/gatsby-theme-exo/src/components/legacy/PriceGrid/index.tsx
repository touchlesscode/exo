/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import Hidden from "@components/Hidden";
import MoreInfoIcon from "@components/MoreInfoIcon";
import { Text, Flex, Paragraph } from "theme-ui";

type PriceGridDataType = {
  priceInfo: {
    item: string;
    value: string;
    notify: boolean;
    icon: any;
    textColor: string;
  }[];
};
type PriceGridThemeType = {
  priceGridStyle?: {};
  itemStyle?: {};
  textStyle?: {};
  iconwrapper?: {};
  iconStyle?: {};
};

type PriceGridConfigType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

interface Props {
  priceGridData?: PriceGridDataType;
  priceGridTheme?: PriceGridThemeType;
  priceGridConfig?: PriceGridConfigType;
  onClick?: React.MouseEvent<HTMLElement>;
}
const PriceGrid: FC<Props> = ({
  priceGridData,
  priceGridTheme,
  priceGridConfig,
}) => {
  const { onClick } = priceGridConfig as PriceGridConfigType;
  const { priceInfo } = priceGridData as PriceGridDataType;
  const { priceGridStyle, itemStyle, textStyle, iconwrapper, iconStyle } =
    priceGridTheme as PriceGridThemeType;
  return (
    <Flex sx={priceGridStyle}>
      {priceInfo.map((data, index) => (
        <Flex key={data.item} sx={{ justifyContent: "space-between" }}>
          <Paragraph
            sx={{
              ...itemStyle,
              color: `${
                index === priceInfo.length - 1 ? "#000000" : "#4f4f4f"
              }`,
              fontWeight: `${index === priceInfo.length - 1 ? "600" : "500"}`,
            }}
          >
            {data.item}
          </Paragraph>
          <Flex>
            <Text
              sx={{
                ...textStyle,
                color: `${data.textColor}`,
                fontWeight: `${index === priceInfo.length - 1 ? "600" : "500"}`,
              }}
            >
              {data.value}
            </Text>
            <Flex sx={iconwrapper}>
              <Hidden hidden={!data.notify}>
                <MoreInfoIcon
                  moreInfoIconData={{ icon: data.icon }}
                  moreInfoIconTheme={{ infoStyle: iconStyle }}
                  moreInfoIconConfig={{ onClick: onClick }}
                />
              </Hidden>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default PriceGrid;
