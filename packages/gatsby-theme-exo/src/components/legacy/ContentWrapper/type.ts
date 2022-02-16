import { HTMLAttributes } from "react";

export interface ContentWrapperPropType extends HTMLAttributes<HTMLDivElement> {
  titleIcon?: string;
  title?: string;
  buttonLabel?: string;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}