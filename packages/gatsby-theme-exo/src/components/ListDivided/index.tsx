import * as React from 'react';
import { Flex } from 'theme-ui';
import Divider from '../Divider';

interface ListDividedProps {
  space?: string;
}

const ListDivided: React.FC<ListDividedProps> = ({ children, space }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <Flex
          sx={{
            flexDirection: 'column'
          }}
        >
          {child}
          {index < React.Children.count(children) - 1 && (
            <Divider
              width="100%"
              height="1px"
              color="#4B528C"
              sx={{
                my: space || 3
              }}
            />
          )}
        </Flex>
      ))}
    </>
  );
};

export default ListDivided;
