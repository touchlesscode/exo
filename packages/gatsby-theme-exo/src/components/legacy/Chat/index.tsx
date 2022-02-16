/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import GatsbyImage from "@components/GatsbyImage";
import { Text, ThemeUIStyleObject, Flex } from "theme-ui";

interface Props {
  theme?: any;
  icon: IGatsbyImageData;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const Chat: FC<Props> = ({ onClick, theme, icon }) => {
  return (
    <Flex sx={theme.contactUs as ThemeUIStyleObject}>
      <Flex sx={theme.sectionHeader as ThemeUIStyleObject} onClick={onClick}>
        <GatsbyImage
          image={icon}
          alt="Chat Live With Us"
          sx={theme.rowImg as ThemeUIStyleObject}
          objectFit="cover"
        />
        <Text sx={theme.rowTitle as ThemeUIStyleObject}>Chat Live With Us</Text>
      </Flex>
    </Flex>
  );
};

export default Chat;
