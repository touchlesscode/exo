import { Theme } from 'theme-ui';
import * as fontProperties from '@exoTheme/theme/fonts';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  ...fontProperties
});

export default theme;
