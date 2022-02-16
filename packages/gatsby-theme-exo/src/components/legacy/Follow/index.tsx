/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import GatsbyImage from "@components/GatsbyImage";
import { Text, ThemeUIStyleObject, Flex } from "theme-ui";

type SectionName = "Chat" | "Request" | undefined;
interface Props {
  theme?: any;
  icon: IGatsbyImageData;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Follow: FC<Props> = ({ onClick, theme, icon }) => {
  return (
    <Flex sx={theme.contactUs as ThemeUIStyleObject}>
      <Flex sx={theme.sectionHeader as ThemeUIStyleObject} onClick={onClick}>
        <Flex sx={theme.rowParent as ThemeUIStyleObject}>
          <GatsbyImage
            image={icon}
            alt="Request Follow Up"
            sx={theme.rowImg as ThemeUIStyleObject}
          />
          <Text sx={theme.rowTitle as ThemeUIStyleObject}>
            Request Follow Up
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Follow;
