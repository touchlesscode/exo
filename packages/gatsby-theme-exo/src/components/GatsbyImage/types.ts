import {
  GatsbyImageProps as IGatsbyImageProps,
  ImageDataLike
} from 'gatsby-plugin-image';
import { ThemeUIStyleObject } from 'theme-ui';

interface GatsbyImageProps {
  image: ImageDataLike;
  sx?: ThemeUIStyleObject;
}
type GatsbyImagePropsType = GatsbyImageProps & IGatsbyImageProps;
export default GatsbyImagePropsType;
