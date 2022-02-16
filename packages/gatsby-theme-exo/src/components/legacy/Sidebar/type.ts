import { OptionType } from "../type";

type FooterLink = {
    id: string;
    icon ?: string;
    label: string;
    url : string;
}

type SocialMediaLink = {
    url : string;
    icon : string;
}

export interface SidebarPropType {
    open: boolean;
    fullSideBar ?: boolean;
    
    leftIcon ?: string;
    leftIconWidth ?: string;
    leftIconHeight ?: string;
    leftIconMargin ?: string;
    onLeftIconClick ?: () => void;
    rightIcon ?: string;
    rightIconWidth ?: string;
    rightIconHeight ?: string;
    onRightIconClick ?: () => void;
    // ExpandedMore?:any;
        options: OptionType[];
    navItemAlignment ?: string;
    navExpandIcon ?: string;
    footerLinks ?: FooterLink[];
    socialMediaLinks ?: SocialMediaLink[];
}