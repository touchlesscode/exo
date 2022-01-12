import buttons from '@exo/theme/variants/buttons';
import cards from '@exo/theme/variants/cards';
import shadows from '@exo/theme/shadows';
import badges from '@exo/theme/variants/badges';
import colors from '@exo/theme/colors';
import { Theme } from 'theme-ui';
import * as fontProperties from '@exo/theme/fonts';
import sizes from '@exo/theme/sizes';
import space from '@exo/theme/space';
import radii from '@exo/theme/borderRadius';
import zIndices from '@exo/theme/zIndices';
import styles from '@exo/theme/styles';
import transitions from '@exo/theme/transitions';
import variants from '@exo/theme/variants';

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
