import * as React from 'react';
import Card from '@exoTheme/components/Card';
import GatsbyImageBg from '@exoTheme/components/GatsbyImageBg';
import { CardProps } from '../types';
import GatsbyImagePropsType from '@exoTheme/components/GatsbyImage/types';
import Typography from '@exoTheme/components/Typography';
import { Box, Text } from 'theme-ui';
import TypographyProps from '@exoTheme/components/Typography/types';

type CardWithListProps = CardProps &
  GatsbyImagePropsType & {
    list: string[];
    title: string;
    titleProps?: TypographyProps;
    listProps?: TypographyProps;
  };

const CardWithList: React.FC<CardWithListProps> = ({
  image,
  title,
  list = [],
  titleProps,
  listProps,
  ...props
}) => {
  return (
    <Card {...props}>
      <GatsbyImageBg
        image={image}
        alt="test"
        sx={{
          width: '95%',
          height: '479px',
          p: 6,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <Box
          sx={{
            zIndex: 2
          }}
        >
          <Typography as="h4" {...titleProps}>
            {title}
          </Typography>
          <ul>
            {list.map((item) => (
              <li key={item}>
                <Text {...listProps}>{item}</Text>
              </li>
            ))}
          </ul>
        </Box>
      </GatsbyImageBg>
    </Card>
  );
};

export default CardWithList;
