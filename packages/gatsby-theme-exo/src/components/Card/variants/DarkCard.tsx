import Badge from '@exoTheme/components/Badge';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import Overlay from '@exoTheme/components/Overlay';
import Typography from '@exoTheme/components/Typography';
import Card from '@exoTheme/components/Card';
import * as React from 'react';
import { Box, Flex } from 'theme-ui';
import { CardProps } from '../types';
import { IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';

interface DarkCardProps {
  title: string;
  image: ImageDataLike & IGatsbyImageData;
  overlay?: string;
  badges?: string[];
}

const DarkCard: React.FC<CardProps & DarkCardProps> = ({
  expendable,
  expended,
  onClick,
  onClose,
  title,
  image,
  boxShadow,
  color,
  variant,
  overlay,
  bgColor,
  badges,
  children,
  ...props
}) => {
  const [height, setHeight] = React.useState<number | string>('100vh');
  return (
    <Card
      {...props}
      expendable={expendable || false}
      expended={expended || false}
      onClick={(e) => {
        onClick && onClick(e);
        setHeight(window.innerHeight);
      }}
      onClose={(e) => onClose && onClose(e)}
      boxShadow={boxShadow || 'full-md'}
      color={color || 'white'}
      variant={variant || 'rounded'}
      bgColor={bgColor || 'white'}
    >
      <Box
        sx={
          expended
            ? {
                display: 'flex',
                flexDirection: 'column',
                height
              }
            : {
                height: '100%'
              }
        }
      >
        <Overlay
          visible={true}
          image={
            overlay ||
            `linear-gradient(
            to bottom,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,${expended ? '0' : '1'}) ${expended ? '35%' : '45%'},
            rgba(0,212,255,0) 100%
          )`
          }
          zIndex={1}
        />
        <Box
          sx={{
            height: !expended ? '100%' : 'max-content',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              padding: '32px 25px 0px',
              zIndex: 1,
              position: expended ? 'absolute' : 'relative'
            }}
          >
            <Typography
              as={'h3'}
              withLine
              line={{ align: 'top', space: '6px' }}
              sx={{
                fontWeight: 'semiBold'
              }}
            >
              {title}
            </Typography>
            {!expended && (
              <Flex
                sx={{
                  mt: 3,
                  gap: '8px',
                  flexWrap: 'wrap'
                }}
              >
                {badges?.map((badge) => (
                  <Badge
                    key={badge}
                    variant="rounded"
                    bg="rgba(255, 255, 255, 0.11)"
                  >
                    {badge}
                  </Badge>
                ))}
              </Flex>
            )}
          </Box>
          <GatsbyImage
            image={image}
            objectFit="cover"
            alt="test"
            sx={{
              height: !expended && 'max-content'
            }}
          />
        </Box>
        {expended && (
          <Box
            color="black"
            sx={{
              height: '100px',
              position: 'relative',
              zIndex: 1,
              flexGrow: '1',
              overflowY: 'auto'
            }}
          >
            {children}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default DarkCard;
