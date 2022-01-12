import * as React from 'react';
import { Box } from 'theme-ui';
import Typography from '../Typography';
import TextBlockProps from '@exoTheme/components/legacy/TextBlock/types';

const TextBlock: React.FC<TextBlockProps> = ({
  heading,
  text,
  headingProps,
  textProps,
  sx
}) => {
  return (
    <Box sx={sx}>
      {heading ? (
        <Typography as="h3" {...headingProps}>
          {heading}
        </Typography>
      ) : null}
      {text ? <Typography {...textProps}>{text}</Typography> : null}
    </Box>
  );
};

export default TextBlock;
