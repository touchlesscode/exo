import { IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { FlexProps } from 'theme-ui';
import Flex from '@exoTheme/components/Flex';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import Rating from '@exoTheme/components/Rating';
import { RatingProps } from '@exoTheme/components/Rating/types';
import Typography from '@exoTheme/components/Typography';

interface RecviewProps extends FlexProps {
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
    <Flex
      {...rest}
      sx={{
        flexDirection: 'column',
        bg: '#F8F7F6',
        borderRadius: '6px',
        px: ['24px', '24px', '0'],
        py: ['16px', '16px', '0'],
        mb: '9px'
      }}
    >
      <Flex gap="2" align="center" sx={{ width: '100%' }}>
        <GatsbyImage
          image={image}
          alt={name}
          sx={{
            width: '32px',
            height: '32px',
            borderRadius: '50%'
          }}
        />
        <Typography
          as="h5"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '-0.02em',
            color: '#151F2A',
            whiteSpace: 'nowrap'
          }}
        >
          {name}
        </Typography>
        <Rating rated={rated} {...rating} />
      </Flex>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '15px',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          color: '#656565',
          maxWidth: '260px',
          ml: '43px'
        }}
      >
        {description}
      </Typography>
    </Flex>
  );
};

export default Recview;
