import React from "react";

import { OptionsType, OptionType } from "../type";
interface ThemeType {
  container?: any;
  headerWrapper?: any;
  iconWrapper?: any;
  brandText?: any;
  btnWrapper?: any;
  searchWrapper?: any;
}
export interface HeaderPropsType {
  options?: OptionsType[];
  showDropdownArrow?: boolean;
  showDropdown?: boolean;
  onNavClick?: (a: OptionType) => void;
  onNavHover?: (a: OptionType) => void;
  searchDisplay?: boolean;
  backLabelDisplay?: boolean;
  backArrow?: boolean;
  transparent?: boolean;
  position?: "absolute" | "fixed" | string | "onscrollUp";
  HamburgerDisplay?: boolean;
  leftIcon?: string;
  leftIconShadow?: boolean;
  onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  backLabel?: string;
  brandText?: string;
  brandIcon?: string;
  brandIconMobile?: boolean;
  brandLogo?: boolean;
  navExpandIcon?: string;
  backgroundColor?: string;
  onRightIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: ThemeType;
  rightIcon?: string;
  isOnSrpPage?: boolean;
  isOnVdpPage?: boolean;
}
