import { keyframes } from '@emotion/react';
import * as React from 'react';
import { Box, ThemeUIStyleObject } from 'theme-ui';


interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  delay?: number;
  color?: string;
  sx?: ThemeUIStyleObject
  animated?: boolean
}

const Skeleton: React.FC<SkeletonProps> = ({ color, width = '100%', height = '100%', delay = 1, animated = true, sx }) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: color || '#eee',
        backgroundImage: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
        backgroundSize: '200px 100%',
        borderRadius: '4px',
        animation: animated ? `${animate} 2s ease-in-out infinite` : 'none',
        ...sx
      }}
    />
  );
}


const animate = keyframes({
  '0%': {
    backgroundPosition: '200px 0',
    opacity: '0.4',
  },
  '50%': {
    backgroundPosition: 'calc(200px + 100%) 0',
    opacity: '1',
  },
  "100%": {
    backgroundPosition: '200px 0',
    opacity: '0.4'
  }
})

export default Skeleton;