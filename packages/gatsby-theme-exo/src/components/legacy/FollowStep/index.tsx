/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useState } from "react";
import ButtonVDP from "@components/ButtonVDP";
import { Text, Label, ThemeUIStyleObject, Field, Box, Flex } from "theme-ui";
import styled from "@emotion/styled";
import axios from "axios";
import { useVehicleContext } from "@contexts/useVehicleContext";
import { useCardViewContext } from "@contexts/CardViewContext";
import GoBack from "../GoBack";

type SectionName = "Default" | "Chat" | "Request";
interface Props {
  theme?: any;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const FollowStep: FC<Props> = ({ theme, name, setName }) => {
  const {
    activeView,
    previousView,
    setPreviousView,
    selectedMode,
    setActiveView,
    setSelectedMode,
  } = useCardViewContext();
  const vehicle = useVehicleContext();

  const [method, setMethod] = useState("mobile");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const RadioInput = styled.input`
    width: 14px;
    height: 14px;
    margin-right: 6px;
    margin-left: 18px;
    &:focus {
      border: unset;
      border-radius: 50% !important;
      box-shadow: 0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important;
    }
    @media screen and (min-width: 767.98px) and (max-width: 950px) {
      margin-left: auto;
    }
  `;

  const handleName = React.useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleMobile = React.useCallback((e) => {
    setMobile(e.target.value);
  }, []);

  const handleEmail = React.useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleRequestFollowUp = React.useCallback(
    async (data) => {
      try {
        await axios.post("/api/request_followup", {
          body: {
            vin: vehicle.vin,
            name,
            email,
            mobile,
            contact_method: method,
          },
        });
        setName("");
        setEmail("");
        setMobile("");
        setPreviousView({
          ...previousView,
          home: {
            prev: activeView,
            selectedMode: selectedMode,
          },
        });
        setActiveView("home");
        setSelectedMode("lg");
      } catch (error) {
        console.error(error);
      }
    },
    [vehicle, name, method, email, mobile]
  );
  return (
    <Box>
      <GoBack text={"Back to talk to someone"} title={"Request Follow Up"} />
      <Flex sx={theme.sectionContent as ThemeUIStyleObject}>
        <Box
          className="form-Content"
          sx={theme.rowContent as ThemeUIStyleObject}
        >
          <Box sx={theme.formFields as ThemeUIStyleObject}>
            <Label htmlFor="name" sx={theme.formLabel as ThemeUIStyleObject}>
              Your Name
              <Field
                label=""
                type="text"
                id="name"
                name="name"
                placeholder="Chirs Jones"
                sx={theme.field as ThemeUIStyleObject}
                onChange={handleName}
              />
            </Label>
            <Label htmlFor="" sx={theme.formLabel as ThemeUIStyleObject}>
              Preferred Method
              <Label sx={theme.toggleRadioLabel as ThemeUIStyleObject}>
                <Label
                  className={`radio-label ${
                    method === "mobile" ? "checked" : ""
                  }`}
                  sx={theme.radioLabel as ThemeUIStyleObject}
                  htmlFor="method_mobile"
                >
                  <RadioInput
                    type="radio"
                    name="method"
                    id="method_mobile"
                    checked={method === "mobile"}
                    onChange={() => setMethod("mobile")}
                  />

                  <Text sx={theme.radioText as ThemeUIStyleObject}>Mobile</Text>
                </Label>
                <Label
                  className={`radio-label ${
                    method === "email" ? "checked" : ""
                  }`}
                  htmlFor="method_email"
                  sx={theme.radioLabel as ThemeUIStyleObject}
                >
                  <RadioInput
                    type="radio"
                    name="preferred_method"
                    id="method_email"
                    checked={method === "email"}
                    onChange={() => setMethod("email")}
                  />

                  <Text sx={theme.radioText as ThemeUIStyleObject}>Email</Text>
                </Label>
              </Label>
            </Label>
            <Label htmlFor="mobile" sx={theme.formLabel as ThemeUIStyleObject}>
              Mobile Number
              <Field
                label=""
                type="text"
                id="mobile"
                name="mobile"
                placeholder="419-555-1212"
                sx={theme.field as ThemeUIStyleObject}
                onChange={handleMobile}
              />
            </Label>
            <Label htmlFor="email" sx={theme.formLabel as ThemeUIStyleObject}>
              Email Address
              <Field
                label=""
                type="text"
                id="email"
                name="email"
                placeholder="chris@jones.com"
                sx={theme.field as ThemeUIStyleObject}
                onChange={handleEmail}
              />
            </Label>
            <ButtonVDP
              ButtonVDPConfig={{
                onClick: handleRequestFollowUp,
                type: "primary",
                arrowIcon: false,
                attr: {
                  type: "submit",
                  disabled: false,
                },
              }}
              ButtonVDPData={{ buttonText: "Request Follow Up" }}
              ButtonVDPTheme={{
                buttonStyle: {
                  borderRadius: "8px",
                },
                arrowStyle: {},
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default FollowStep;
