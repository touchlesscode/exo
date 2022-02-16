import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "@emotion/styled";
import {
  List,
  ListItem,
  StyledButton,
  StyledInnerCard,
  StyledIntroHeading,
  StyledIntroPara,
  StyledScheduleCard,
} from "./style";

const ScheduleCard = () => {
  return (
    <StyledScheduleCard>
      <StyledInnerCard>
        <StyledIntroPara>Schedule an appointment online</StyledIntroPara>
        <StyledIntroHeading>
          We’ll pick it up and bring it back.
        </StyledIntroHeading>
        <List>
          <ListItem>
            <StaticImage
              src="../../assets/images/car-schedule-card.png"
              alt="car icon"
              height={24}
            />
            <p>Enter your vehicle information</p>
          </ListItem>
          <ListItem>
            <StaticImage
              src="../../assets/images/clock-schedule-card.png"
              alt="car icon"
              height={32}
            />
            <p>Choose your appointment date and time</p>
          </ListItem>
          <ListItem>
            <StaticImage
              src="../../assets/images/check-schedule-card.png"
              alt="car icon"
              height={32}
            />
            <p>Review and book your appointmet</p>
          </ListItem>
        </List>
        <StyledButton>Schedule an Appointment</StyledButton>
      </StyledInnerCard>
    </StyledScheduleCard>
  );
};

export default ScheduleCard;
