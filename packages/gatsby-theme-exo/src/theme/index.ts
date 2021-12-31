import buttons from '@exoTheme/theme/variants/buttons';
import cards from '@exoTheme/theme/variants/cards';
import shadows from '@exoTheme/theme/shadows';
import badges from '@exoTheme/theme/variants/badges';
import colors from '@exoTheme/theme/colors';
import { Theme } from 'theme-ui';
import * as fontProperties from '@exoTheme/theme/fonts';
import sizes from '@exoTheme/theme/sizes';
import space from '@exoTheme/theme/space';
import radii from '@exoTheme/theme/borderRadius';
import zIndices from '@exoTheme/theme/zIndices';
import styles from '@exoTheme/theme/styles';
import transitions from '@exoTheme/theme/transitions';
import variants from '@exoTheme/theme/variants';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  colors,
  ...fontProperties,
  sizes,
  space,
  radii,
  zIndices,
  styles,
  shadows,
  buttons,
  cards,
  badges,
  transitions,
  ...variants
});

export default theme;
