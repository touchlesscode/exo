/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "@components/Button";
import Flex from "@components/Flex";
import { Box } from "theme-ui";
import Typography from "@components/Typography";
import React from "react";

function ScheduleAppointment() {
  return (
    <Flex direction={"column"}>
      <Typography type={"lightText"}>Schedule an appointment online</Typography>
      <Typography type={"h2"}>We’ll pick it up and bring it back.</Typography>

      <Box sx={{ padding: 10 }}>
        <Flex>
          <Typography type={"h4"}>Enter your vehicle information</Typography>
        </Flex>
        <Flex sx={{ marginTop: "30px" }}>
          <Typography type={"h4"}>
            Choose your appointment date and time
          </Typography>
        </Flex>
        <Flex sx={{ marginTop: "30px" }}>
          <Typography type={"h4"}>Review and book your appointmet</Typography>
        </Flex>
        <Flex sx={{ marginTop: "30px" }}>
          <Button sx={{ width: "100%" }} variant="primary">
            {"Schedule an Appointment"}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ScheduleAppointment;
