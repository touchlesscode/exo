import { HTMLAttributes } from "react";

export interface DividerPropType extends HTMLAttributes<HTMLHRElement> {
  type?: string;
  marginTop?: string;
  marginBottom?: string;
}
