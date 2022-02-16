import { ElementType, ImgHTMLAttributes, CSSProperties } from "react";
import { PlaceholderProps } from "./placeholder";
import { PictureProps } from "./picture";

interface IGatsbyImageData {
  layout: "fixed" | "fullWidth" | "constrained";
  width: number;
  height: number;
  backgroundColor?: string;
  images: Pick<PictureProps, "sources" | "fallback">;
  placeholder?: Pick<PlaceholderProps, "sources" | "fallback">;
}
interface GatsbyImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "placeholder" | "onLoad" | "src" | "srcSet" | "width" | "height"
  > {
  alt: string;
  as?: ElementType;
  className?: string;
  class?: string;
  imgClassName?: string;
  image: IGatsbyImageData;
  imgStyle?: CSSProperties;
  backgroundColor?: string;
  objectFit?: CSSProperties["objectFit"];
  objectPosition?: CSSProperties["objectPosition"];
  onLoad?: () => void;
  onError?: () => void;
  onStartLoad?: (props: { wasCached?: boolean }) => void;
}

export default GatsbyImageProps;
