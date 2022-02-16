import * as React from "react";
import useWindowSize from "@hooks/useWindowSize";
import styled, { css } from "styled-components";
import { Box, Divider, Grid, Text } from "theme-ui";
import { MyAccountComponent } from "./MyAccountComponent";

const theme = {
  commonTextStyles: {
    fontFamily: "Poppins",
    fontStyle: "normal",
  },
};

export const MyAccountTab = (props: any) => {

  const { type } = useWindowSize();
  return (
    <React.Fragment>
      <div>
        <Flex
          style={{
            display: props?.id === "1" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            // maxWidth: 970,
            padding: "0 24px",
          }}
        >
          <MyAccountComponent />
        </Flex>
      </div>

      <div>
        <Flex
          style={{
            display: props?.id === "2" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
         
        </Flex>
      </div>

      <div>
        <Flex
          style={{
            display: props?.id === "3" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
          
        </Flex>
      </div>

      <div>
        <Flex
          style={{
            display: props?.id === "4" ? "block" : "none",
            margin: type === "sm" ? "0" : "auto",
            maxWidth: 970,
            padding: "0px",
          }}
        >
         
        </Flex>
      </div>
    </React.Fragment>
  );
};

// export default tabComponent;

interface ScreenType {
  screenType?: string;
}

interface ReviewCardProps extends ScreenType {}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroTextContainer = styled.div<ScreenType>`
  text-align: center;
  width: 100%;
  max-width: ${(props) => (props.screenType === "sm" ? "350px" : "600px")};
  position: absolute;
  /* top: ${(props) => (props.screenType === "sm" ? "64px" : "100px")}; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroHeading = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
  margin-bottom: 16px;
`;

const HeroContent = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  /* margin-bottom: 56px; */
`;

const HeadingText = styled.h2`
  font-family: Poppins;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #151f2a;
  margin: 6px 0 16px;
  overflow-wrap: break-word;
`;

const HeadingHr = styled.div`
  width: 113px;
  height: 4px;
  background: #151f2a;
`;

const ContentText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin: 0;
`;
export const ReviewHeading = styled.h5`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #151f2a;
  margin: 0;
  margin-right: 11px;
`;

export const ReviewContent = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #656565;
  margin: 0;
`;

export const ReviewContainer = styled.div`
  display: flex;
  background-color: #f8f7f6;
  border-radius: 6px;
  padding: 16px;
  padding-right: 24px;
  margin-bottom: 16px;
`;
interface CardContainerProp extends ScreenType {
  reverse?: boolean;
}

const CardsContainer = styled.div<ScreenType>`
  margin-top: 72px;
  padding-bottom: 20px;
  ${(props) =>
    props.screenType !== "sm" &&
    css`
      margin-top: 100px;
      padding-bottom: 80px;
    `}
`;

// const CardContainer = styled.div<CardContainerProp>`
//   padding-bottom: 80px;
//   ${(props) =>
//     props.screenType !== "sm" &&
//     css<CardContainerProp>`
//       display: flex;
//       flex-direction: ${(props) => (props.reverse ? "row-reverse" : "reverse")};
//       gap: 57px;
//       align-items: center;
//     `}
// `;

const CardContainer = styled.div<CardContainerProp>`
  /* margin: 72px 0; */
  max-width: ${(props) => props.screenType !== "sm" && "1018px"};
  margin: 72px 0;
  ${(props) =>
    props.screenType !== "sm" &&
    css<CardContainerProp>`
      /* margin: 100px auto; */
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "reverse")};
      margin: 72px 0;
      padding: 0 24px;
      display: flex;
      gap: 57px;
      align-items: center;
      /* &:nth-of-type(2n-1) {
        flex-direction: row-reverse;
      } */
    `}
`;

const CardImage = styled.img<ScreenType>`
  height: 301px;
  width: 100vw;
  border-radius: 0;
  object-fit: cover;
  ${(props) =>
    props.screenType !== "sm" &&
    css`
      height: 166px;
      width: 400px;
      /* border-radius: 16px; */
    `}
`;

const CardBody = styled.div<ScreenType>`
  padding: 32px 24px 0;
  margin-bottom: 80px;
  ${(props) =>
    props.screenType !== "sm" &&
    css`
      padding: 0;
      max-width: 514px;
      margin-bottom: 0px;
    `}
`;

const BlockHeadingWrapper = styled.div<ScreenType>`
  margin: 72px auto 0;
  padding: 0 24px;
  max-width: 1018px;
  ${(props) =>
    props.screenType === "sm" &&
    css`
      margin: 48px auto 0;
    `}
`;

const BlockContentWrapper = styled.div<ScreenType>`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1018px;
  ${(props) =>
    props.screenType === "sm" &&
    css`
      margin: 0 auto;
    `}
`;

const GridContainer = styled.div`
  margin-top: 72px;
  padding: 0 24px;
`;

const ReviewCard = styled.div<ReviewCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  /* margin: 0px 16px; */
  padding: 1.5rem 1rem 1.5rem;
  background: #f8f7f6;
  border-radius: 16px;
  /* box-shadow: rgb(0 0 0 / 6%) 0px 8px 25px, rgb(30 30 30 / 4%) 0px 0px 8px; */
  margin-bottom: 1rem;
  ${(props) =>
    props.screenType === "sm" &&
    css`
      &:last-child {
        margin-bottom: 0;
      }
    `}
`;
