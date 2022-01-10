import { ThemeUIStyleObject } from 'theme-ui';
import GatsbyImagePropsType from '@exoTheme/components/GatsbyImage/types';

export interface ImageWithLabelProps extends GatsbyImagePropsType {
  sx?: ThemeUIStyleObject;
  label: string;
  imageWidth?: string;
  imageVariant?: string;
  height?: string;
  labelStyle?: ThemeUIStyleObject;
  imageStyles?: ThemeUIStyleObject;
}
