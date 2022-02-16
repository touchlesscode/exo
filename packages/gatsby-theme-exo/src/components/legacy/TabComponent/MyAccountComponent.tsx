import React from "react";
import useWindowSize from "@hooks/useWindowSize";
import styled, { css } from "styled-components";
import { Box, Divider, Grid, Text } from "theme-ui";

const theme = {
  commonTextStyles: {
    fontFamily: "Poppins",
    fontStyle: "normal",
  },
};

export const MyAccountComponent: React.FC<{}> = () => {
  const { type } = useWindowSize();

  return (
    <React.Fragment>
      <Divider sx={{ color: "#151F2A", background: "#151F2A", height: "4px", fontWeight: 700, maxWidth: "235px", margin: "50px 0 0 0" }} />
      <Flex style={{ margin: "4px 0 32px 0", justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }}>
        <Text
          sx={{
            color: "#151F2A",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "36px",
            ...theme.commonTextStyles,
          }}
        >
          Personal Information
        </Text>
        <Text
          sx={{
            color: "#3A5F96",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "36px",
            ...theme.commonTextStyles,
          }}
        >
          Edit
        </Text>
      </Flex>
      <Flex style={{ margin: "0 0 61px 0" }}>
        <Flex style={{ flexDirection: "row", marginBottom: "29px" }}>
          <Text
            sx={{
              width: type === "sm" ? "45%": "30%",
              color: "#656565",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "18px",
              ...theme.commonTextStyles,
            }}
          >
            Full Name
          </Text>
          <Text
            sx={{
              width: type === "sm" ? "55%" : "70%",
              color: "#151F2A",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "18px",
              ...theme.commonTextStyles,
            }}
          >
            John Johnson
          </Text>
        </Flex>
        <Flex style={{ flexDirection: "row", marginBottom: "29px" }}>
          <Text
            sx={{
              width: type === "sm" ? "45%": "30%",
              color: "#656565",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "18px",
              ...theme.commonTextStyles,
            }}
          >
            Email
          </Text>
          <Text
            sx={{
              width: type === "sm" ? "55%" : "70%",
              wordWrap: "break-word",
              color: "#3A5F96",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "18px",
              ...theme.commonTextStyles,
            }}
          >
            john@appleseed.com
          </Text>
        </Flex>
        <Flex style={{ flexDirection: "row" }}>
          <Text
            sx={{
              width: type === "sm" ? "45%": "30%",
              color: "#656565",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "18px",
              ...theme.commonTextStyles,
            }}
          >
            Phone Number
          </Text>
          <Text
            sx={{
              width: type === "sm" ? "55%" : "70%",
              color: "#3A5F96",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "18px",
              ...theme.commonTextStyles,
            }}
          >
            250-123-1234
          </Text>
        </Flex>
      </Flex>
      <Divider sx={{ color: "#E4E4E4", height: "1px", margin: "0px 0px 56px 0px" }} />
      <Divider sx={{ color: "#151F2A",background: "#151F2A",  maxWidth: "179px", height: "4px", margin: "0" }} />
      <Flex style={{ margin: "4px 0 32px 0", justifyContent: "space-between", flexDirection: "row" }}>
        <Text
          sx={{
            color: "#151F2A",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "36px",
            ...theme.commonTextStyles,
          }}
        >
          Preferred Stores
        </Text>
        <Text
          sx={{
            color: "#3A5F96",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "33px",
            ...theme.commonTextStyles,
          }}
        >
          Change
        </Text>
      </Flex>
    </React.Fragment>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
