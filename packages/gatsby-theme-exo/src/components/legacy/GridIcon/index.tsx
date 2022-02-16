/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import styled from "styled-components";

interface IconProps {
  children: React.ReactNode;
  text: string;
  size: "sm" | "lg";
  hasShadow?: boolean;
  list?: string[];
}

const GridIcon = ({ children, text, size, hasShadow, list }: IconProps) => {
  return (
    <Button
      style={{
        boxShadow: hasShadow
          ? "0px 8px 25px rgba(0, 0, 0, 0.06), 0px 0px 8px rgba(30, 30, 30, 0.04)"
          : "",
        padding: hasShadow ? "2.8rem 1rem 1.5rem 1rem" : "1rem",
      }}
      dropdownVisible={Boolean(list?.length)}
    >
      <Flex
        sx={{ margin: "0 auto", alignItems: "center", flexDirection: "column" }}
      >
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "flex-start",
            maxHeight: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: size !== "sm" ? undefined : 34
            }}
          >
            {children}
          </div>
        </Flex>

        <IconText>{text}</IconText>
      </Flex>
      <DropDown visible={Boolean(list?.length)}>
        {list?.map((item) => (
          <li key={item}>
            <a href="/">{item}</a>
          </li>
        ))}
      </DropDown>
    </Button>
  );
};

const IconText = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.375rem;
  align-items: flex-end;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors["primary-50"]};
  margin-bottom: 0;
`;
export const DropDown = styled.ul<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 12px 32px rgba(26, 26, 26, 0.24);
  list-style: none;
  padding: 1.125rem 0;
  z-index: 1;
  width: 100%;
  max-width: 230px;
  border-radius: 8px;
  visibility: hidden;

  li {
    font-family: ${(props) => props.theme.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.875rem;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme.colors["primary-50"]};
    display: block;
    text-align: left;

    :hover,
    :focus-within {
      background-color: ${(props) => props.theme.colors["gray-0"]};
    }

    :not(:last-child) {
      margin-bottom: 0.625rem;
    }

    a {
      color: inherit;
      padding: 0 1rem;
      text-decoration: 0;
      display: block;
    }
  }
`;

const Button = styled.button<{ dropdownVisible: boolean }>`
  position: relative;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 10px;

  :hover,
  :focus,
  :focus-within {
    ${DropDown} {
      visibility: ${(props) => (props.dropdownVisible ? "visible" : "hidden")};
    }
  }
`;

export default GridIcon;
