/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Box, Button, Flex, Text } from "@theme-ui/components";
import PlusIcon from "@assets/icons/plus.inline.svg";
import MinusIcon from "@assets/icons/minus.inline.svg";
import GatsbyImage from "@components/GatsbyImage";
type DetailsDataType = {
  navItems: {
    title: string;
    icon: {
      id: number;
      name: string;
      image: IGatsbyImageData;
    };
    content: string[][];
  }[];
};
type DetailsThemeType = {
  tabsWrapper?: {};
  tabsRow?: {};
  tabText?: {};
  tabContentWrapper?: {};
  tabContentFlex?: {};
  tabContentText?: {};
};

interface DetailsProps {
  DetailsData: DetailsDataType;
  DetailsTheme: DetailsThemeType;
  show?: Boolean;
}

const Details: FC<DetailsProps> = ({ DetailsData, DetailsTheme, show }) => {
  const { navItems } = DetailsData as DetailsDataType;
  const {
    tabsWrapper,
    tabsRow,
    tabText,
    tabContentWrapper,
    tabContentFlex,
    tabContentText,
  } = DetailsTheme as DetailsThemeType;

  const [activeTab, setActiveTab] = useState(-1);

  return (
    <React.Fragment>
      <Box sx={tabsWrapper}>
        {navItems.map((navItem, index) => (
          <Flex key={"navItem title" + index} sx={tabsRow}>
            <Button
              tabIndex={show ? 0 : -1}
              onClick={() => {
                activeTab === index ? setActiveTab(-1) : setActiveTab(index);
              }}
              sx={{
                ...{
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "row",
                  color: `${activeTab === index ? "#3A5F96" : "#656565"}`,
                  borderBottom: `${
                    "1px solid " +
                    (activeTab === index
                      ? "#3A5F96!important"
                      : "transparent!important")
                  }`,
                  "&:hover": {
                    borderBottom: `${
                      "1px solid " +
                      (activeTab === index
                        ? "#3A5F96!important"
                        : "#656565!important")
                    }`,
                  },
                },
                ...tabText,
              }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Flex>
                  <GatsbyImage
                    image={navItem.icon.image}
                    alt={navItem.title}
                    objectFit="cover"
                    sx={{
                      width: "24px",
                      height: "24px",
                      marginRight: "16px",
                    }}
                  />
                  {navItem.title}
                </Flex>
              </Flex>
              <Flex
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  marginLeft: "10px"
                }}
              >
                {activeTab === index ? <MinusIcon /> : <PlusIcon />}
              </Flex>
            </Button>
            <Flex key={"navItem content" + index} sx={tabContentWrapper}>
              {activeTab === index
                ? navItem.content.map((content, i) => (
                    <Box key={"content" + i} sx={tabContentFlex}>
                      {content.map((text, index) => (
                        <Text key={"content text" + index} sx={tabContentText}>
                          {text}
                        </Text>
                      ))}
                    </Box>
                  ))
                : null}
            </Flex>
          </Flex>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Details;
