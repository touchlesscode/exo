import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Box, Grid, BoxProps } from 'theme-ui';
import Flex from '@exoTheme/components/Flex';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import Rating from '@exoTheme/components/Rating';
import { RatingProps } from '@exoTheme/components/Rating/types';
import Typography from '@exoTheme/components/Typography';

interface RecviewProps extends BoxProps {
  image: IGatsbyImageData;
  name: string;
  description: string;
  rated?: number;
  rating?: Omit<RatingProps, 'rated'>;
}

const Recview: React.FC<RecviewProps> = ({
  image,
  name,
  description,
  rated = 5,
  rating,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Grid
        columns="2rem 1fr"
        sx={{
          alignItems: 'center'
        }}
      >
        <GatsbyImage
          image={image}
          alt={name}
          sx={{
            width: 8,
            height: 8,
            borderRadius: 100
          }}
        />
        <Flex gap="3" align="center" sx={{ width: '100%' }}>
          <Typography as="h5">{name}</Typography>
          <Rating rated={rated} {...rating} />
        </Flex>
        <Typography
          sx={{
            fontWeight: 'normal',
            gridColumn: '2',
            fontFamily: 'Poppins',
            fontSize: '15px',
            lineHeight: '20px',
            letterSpacing: '-0.01em',
            color: '#656565',
            width: '100%',
            maxWidth: '260px'
          }}
        >
          {description}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Recview;
