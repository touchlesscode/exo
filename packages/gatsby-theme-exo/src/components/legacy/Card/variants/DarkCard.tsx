import Badge from '@exoTheme/components/legacy/Badge';
import GatsbyImage from '@exoTheme/components/legacy/GatsbyImage';
import Overlay from '@exoTheme/components/legacy/Overlay';
import Typography from '@exoTheme/components/legacy/Typography';
import Card from '@exoTheme/components/legacy/Card';
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
  expendTo,
  onClick,
  onClose,
  title,
  image,
  shadow,
  color,
  variant,
  overlay,
  badges,
  children,
  ...props
}) => {
  const [height, setHeight] = React.useState<number | string>('100vh');
  return (
    <Card
      {...props}
      expendable={expendable || false}
      expendTo={expendTo}
      expended={expended || false}
      onClick={() => {
        onClick && onClick();
        setHeight(window.innerHeight);
      }}
      onClose={onClose}
      shadow={shadow || 'full-md'}
      color={color || 'white'}
      variant={variant || 'rounded'}
    >
      <Box
        sx={
          expended
            ? {
                display: 'flex',
                flexDirection: 'column',
                height: `calc(${height}px - ${expendTo?.top || '0px'})`
              }
            : {
                height: '100%'
              }
        }
      >
        <Overlay
          animated
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
