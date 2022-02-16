/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, ThemeUIStyleObject } from "theme-ui";
import * as React from "react";
import Divider from "@components/Divider";

interface ListDividedProps {
  space?: string;
}

const ListDivided: React.FC<ListDividedProps> = ({ children, space }) => {
  return (
    <React.Fragment>
      {React.Children.map(children, (child, index) => (
        <Flex
          sx={{
            flexDirection: "column",
          }}
        >
          {child}
          {index < React.Children.count(children) - 1 && (
            <Divider
              width="100%"
              height="1px"
              color="#E4E5EA"
              sx={{
                my: space || 3,
              }}
            />
          )}
        </Flex>
      ))}
    </React.Fragment>
  );
};

export default ListDivided;
