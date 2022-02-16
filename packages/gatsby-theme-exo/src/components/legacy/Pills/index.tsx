/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";

import { PillsContainer, PillContainer } from "./style";

interface PillsThemeType {
  pills: any;
  pill: any;
}

interface OptionsType {
  id?: string;
  text: string;
}

interface PillsPropType {
  options: OptionsType[];
  theme?: PillsThemeType;
  onClick?: (text: string, id?: string) => void;
}

interface PillPropType {
  id?: string;
  text: string;
  theme?: any;
  onClick?: (text: string, id?: string) => void;
}

const Pill: FC<PillPropType> = ({ id, text, theme, onClick }) => {
  return (
    <PillContainer
      sx={theme}
      tabIndex={onClick ? 0 : undefined}
      onClick={() => onClick && onClick(text, id)}
    >
      {text}
    </PillContainer>
  );
};

const Pills: FC<PillsPropType> = ({ options, theme, onClick }) => {
  return (
    <PillsContainer sx={theme?.pills}>
      {options.map((opt, index) => {
        return (
          <Pill
            key={index}
            id={opt.id}
            text={opt.text}
            theme={theme?.pill}
            onClick={onClick}
          />
        );
      })}
    </PillsContainer>
  );
};

export { Pill };
export default Pills;
