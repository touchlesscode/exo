import React, { FC } from "react";

import { ContentWrapperPropType } from "./type";
import { Title, StyledButton, IconContainer } from "./style";

import Flex from "@components/Flex";
import ImageContainer from "@components/ImageContainer";

import DownArrow from "@assets/icons/arrow-down.svg";
import Typography from "@components/Typography";

const ContentWrapper: FC<ContentWrapperPropType> = ({
  titleIcon,
  title,
  children,
  buttonLabel,
  onButtonClick,
  ...props
}) => {
  return (
    <Flex direction={"column"} {...props}>
      {title && (
        <Title>
          {titleIcon && (
            <IconContainer
              iconWidth="1.375rem"
              iconHeight="1.375rem"
            >
              <ImageContainer source={titleIcon} alt={title} />
            </IconContainer>
          )}
          <Typography type="h2" color="gray-100-v2">
            {title}
          </Typography>
        </Title>
      )}

      {children}

      {buttonLabel && (
        <StyledButton
          btnType={"default"}
          backgroundColor={"transparent"}
          width={"fit-content"}
          border={"0.063rem solid #3A5F96"}
          borderRadius={"0.625rem"}
          color={"#3A5F96"}
          onClick={onButtonClick}
        >
          <IconContainer
            iconWidth="0.5"
            iconHeight="auto"
          >
            <ImageContainer source={DownArrow} alt="" />
          </IconContainer>
          <Typography type="p10" color="secondary">{buttonLabel}</Typography>
        </StyledButton>
      )}
    </Flex>
  );
};

export default ContentWrapper;