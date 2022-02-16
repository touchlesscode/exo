import { OptionsType, OptionType } from "../type";

export interface NavItemsPropType {
  options?: OptionsType[];
  isSidebar?: any;
  ExpandedMore?:any;
  showDropdownArrow?: boolean;
  showDropdown?: boolean;
  setExpandedMore?:any;
  navItemAlignment?: string;
  navExpandIcon?: string;
  onNavClick?: (a: OptionType) => void;
  onNavHover?: (a: OptionType) => void;
  linkColor?:string;
}

export const subNavBarOptions = [
  {
    heading: "vdp",
    content: [
      {
        text: "Where am I bying this vehicle from?",
        id: "1",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "2",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "3",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "4",
      },
    ],
  },
  {
    heading: "vdp1",
    content: [
      {
        text: "Where am I bying this vehicle from?",
        id: "1",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "2",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "3",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "4",
      },
    ],
  },
  {
    heading: "vdp2",
    content: [
      {
        text: "Where am I bying this vehicle from?",
        id: "1",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "2",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "3",
      },
      {
        text: "Where am I bying this vehicle from?",
        id: "4",
      },
    ],
  },
];
