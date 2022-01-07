import * as React from 'react';
import { Box, ThemeUIStyleObject } from 'theme-ui';
import GatsbyImage from '@exoTheme/components/GatsbyImage';
import GatsbyImagePropsType from '@exoTheme/components/GatsbyImage/types';

interface GatsbyImageBgProps extends GatsbyImagePropsType {
  height?: string;
  width?: string;
  imageSx?: ThemeUIStyleObject;
}

const GatsbyImageBg: React.FC<GatsbyImageBgProps> = ({
  children,
  height = '100%',
  width = '100%',
  imageSx,
  sx,
  ...props
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height,
        width
      }}
    >
      <GatsbyImage
        {...props}
        aria-hidden={true}
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          ...imageSx
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          ...sx
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GatsbyImageBg;
