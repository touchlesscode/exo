import React, { FC } from 'react';

import NavItems from '@components/NavItems';
import ImageContainer from '@components/ImageContainer';
import Backdrop from "@components/Backdrop"
import Typography from '@components/Typography';
import Link from '@components/Link';

import useWindowSize from '@hooks/useWindowSize';

import { SidebarWrapper, TopIconWrapper, NavItemsWrapper, FooterLinkWrapper, FooterLinkItem, SocialMediaLinkWrapper, SocialMediaLink } from "./style";
import { SidebarPropType } from "./type";

const Sidebar:FC<SidebarPropType> = ({ 
    open, 
    fullSideBar,

    leftIcon, 
    leftIconHeight,
    leftIconWidth,
    leftIconMargin,
    onLeftIconClick,

    rightIcon,
    rightIconHeight,
    rightIconWidth,
    onRightIconClick, 

    options, 
    navItemAlignment,
    navExpandIcon,

    footerLinks,
    socialMediaLinks
}) => {

    const size = useWindowSize();

    if(size.type === 'lg'){
        onRightIconClick && onRightIconClick();
    }

    return (
        <>
            {open && <Backdrop onClick={onRightIconClick} />}
            <SidebarWrapper fullSideBar={fullSideBar} open={open}>
                {leftIcon && (
                    <TopIconWrapper position="left" onClick={onLeftIconClick} margin={leftIconMargin} iconWidth={leftIconWidth} iconHeight={leftIconHeight}>
                        <ImageContainer source={leftIcon} alt="leftIcon" />
                    </TopIconWrapper>
                )}
                {rightIcon && <TopIconWrapper position="right" onClick={onRightIconClick} margin={leftIconMargin} iconWidth={rightIconWidth} iconHeight={rightIconHeight} >
                    <ImageContainer source={rightIcon} alt="rightIcon" />
                </TopIconWrapper>}
                <NavItemsWrapper>
                    <NavItems navExpandIcon={navExpandIcon} navItemAlignment={navItemAlignment} options={options} isSidebar />
                </NavItemsWrapper>
                {footerLinks && <FooterLinkWrapper>
                    {footerLinks.map(link => {
                        return (
                            <Link style={{ flex: '1 0 33%'}} key={link.id} to={link.url}>
                                <FooterLinkItem>
                                    {link.icon && <ImageContainer source={link.icon} alt={link.label} />}
                                    <Typography type="p4" color="white">
                                        {link.label}
                                    </Typography>
                                </FooterLinkItem>
                            </Link>
                        );
                    })}
                </FooterLinkWrapper>}
                {socialMediaLinks && <SocialMediaLinkWrapper>
                    {socialMediaLinks.map((item, index) => {
                        return (
                            <SocialMediaLink key={index} to={item.url}>
                                <img src={item.icon} alt="" />
                            </SocialMediaLink>
                        )
                    })}
                </SocialMediaLinkWrapper>}
                
            </SidebarWrapper>
        </>
    )
}

export default Sidebar
