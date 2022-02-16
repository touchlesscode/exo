/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "theme-ui";
import GatsbyImage from "@components/GatsbyImage";
import { IGatsbyImageData } from "gatsby-plugin-image";

type textHeaderDataType = {
  title?: string;
  subtitle?: string;
  icon?: IGatsbyImageData;
};
type textHeaderThemeType = {
  textHeaderWrapper?: {};
  imageWrapper?: {};
  image?: {};
  textParent?: {};
  textWrapper?: {};
  text?: {};
  subTextWrapper?: {};
  subText?: {};
};
type textHeaderConfigType = {
  wrapperConfig?: {
    [x: string]: any;
  };
  imageConfig?: {
    [x: string]: any;
  };
  textConfig?: {
    [x: string]: any;
  };
  subTextConfig?: {
    [x: string]: any;
  };
};

interface Props {
  textHeaderData?: textHeaderDataType;
  textHeaderTheme?: textHeaderThemeType;
  textHeaderConfig?: textHeaderConfigType;
}
const TextHeader: FC<Props> = ({
  textHeaderData,
  textHeaderTheme,
  textHeaderConfig,
}) => {
  const { title, subtitle, icon } = textHeaderData as textHeaderDataType;
  const {
    textHeaderWrapper,
    imageWrapper,
    image,
    textParent,
    textWrapper,
    text,
    subTextWrapper,
    subText,
  } = textHeaderTheme as textHeaderThemeType;
  const [textHeaderConfigs, settextHeaderConfigs] = useState(textHeaderConfig);
  useEffect(() => {
    settextHeaderConfigs(textHeaderConfig);
  }, []);
  return (
    <Flex
      sx={textHeaderWrapper}
      {...(textHeaderConfigs && textHeaderConfigs.wrapperConfig)}
    >
      {image && (
        <Box sx={imageWrapper}>
          {icon && (
            <GatsbyImage
              image={icon}
              alt={title || ""}
              objectFit="contain"
              sx={image}
              {...(textHeaderConfigs && textHeaderConfigs.imageConfig)}
            />
          )}
        </Box>
      )}
      <Flex sx={textParent}>
        <Heading
          as="h2"
          sx={text}
          {...(textHeaderConfigs && textHeaderConfigs.textConfig)}
        >
          {title}
        </Heading>
        {subtitle && (
          <Text
            sx={subText}
            {...(textHeaderConfigs && textHeaderConfigs.subTextConfig)}
          >
            {subtitle}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default TextHeader;
