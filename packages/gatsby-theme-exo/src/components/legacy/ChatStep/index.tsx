/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import ButtonVDP from "@components/ButtonVDP";
import { Label, ThemeUIStyleObject, Field, Box, Flex } from "theme-ui";
import GoBack from "../GoBack";

interface Props {
  theme?: any;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const ChatStep: FC<Props> = ({ theme, setName }) => {
  const handleName = React.useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleStartMyChat = React.useCallback(() => {}, []);
  return (
    <Box>
      <GoBack text={"Back to talk to someone"} title={"Chat Live With Us"} />
      <Flex sx={theme.sectionContent as ThemeUIStyleObject}>
        <Box sx={theme.rowContent as ThemeUIStyleObject}>
          <Box sx={theme.formFields as ThemeUIStyleObject}>
            <Label htmlFor="name" sx={theme.formLabel as ThemeUIStyleObject}>
              <Field
                label="What's your first name"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                sx={theme.field as ThemeUIStyleObject}
                onChange={handleName}
              />
            </Label>
            <ButtonVDP
              ButtonVDPConfig={{
                onClick: handleStartMyChat,
                type: "primary",
                arrowIcon: false,
                attr: {
                  type: "submit",
                  disabled: true,
                },
              }}
              ButtonVDPData={{ buttonText: "Start My Chat" }}
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

export default ChatStep;
