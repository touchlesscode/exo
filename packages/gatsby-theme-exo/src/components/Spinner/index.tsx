import * as React from 'react';
import { Spinner as ThemeSpinner, SpinnerProps } from 'theme-ui';

const Spinner: React.FC<SpinnerProps> = (props) => {
  return <ThemeSpinner {...props} />;
};

export default Spinner;
