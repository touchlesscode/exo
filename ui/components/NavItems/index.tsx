import React, { FC, useEffect, useRef, useState } from "react";

import ImageContainer from "@components/ImageContainer";
import Typography from "@components/Typography";
import Link from "@components/Link";

import useWindowSize from "@hooks/useWindowSize"
import { OptionType } from "@components/type";
import DownArrow from "@assets/icons/chevron-down.svg";

import { 
    HeaderNavItemsWrapper, 
    HeaderNavItem,
    SubNavOptions, 
    LinkText, 
    NavExpandIconWrapper,
    SidebarNavItemsWrapper,
    SidebarNavItem,
    ButtonWrapper
} from "./style";
import {NavItemsPropType} from "./type";

const NavItems:FC<NavItemsPropType> = ({ options, isSidebar, showDropdownArrow=true, showDropdown=true, onNavClick, onNavHover, navItemAlignment, navExpandIcon }) => {

    const size = useWindowSize();
    // const subNavRef = useRef();
    const [isExpanded, setIsExpanded] = useState<string | number | null>(null);

    // useEffect(() => {
    //     function keyListener(e:KeyboardEvent) {
    //         const listener = keyListenersMap.get(e.keyCode);
    //         return listener && listener(e);
    //       }
    //       document.addEventListener("keydown", keyListener);
      
    //       return () => document.removeEventListener("keydown", keyListener);
    // }, []);

    // const handleTabKey = (e:KeyboardEvent) => {
    //     if(!subNavRef.current) return;
    //     const focusableModalElements = subNavRef.current.querySelectorAll(
    //         'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    //     );
    //     const firstElement = focusableModalElements[0];
    //     const lastElement = focusableModalElements[focusableModalElements.length - 1];
        
    //     if (!e.shiftKey && document.activeElement === lastElement) {
    //         firstElement.focus();
    //         return e.preventDefault();
    //     }
    
    //     if (e.shiftKey && document.activeElement === firstElement) {
    //         lastElement.focus();
    //         e.preventDefault();
    //     }
    // };

    
    const onNaigationHoverHandler = (option : OptionType) => {
        setIsExpanded(option.id);
        onNavHover && onNavHover(option)
    }
    
    const onNaigationLeaveHandler = () => {
        setIsExpanded(null);
    }
    
    const onNaigationClickHandler = (option : OptionType) => {
        setIsExpanded(option.id);
        onNavClick && onNavClick(option)
    }

    // const keyListenersMap = new Map([[27, onNaigationLeaveHandler], [9, handleTabKey]]);
    
    if(isSidebar){
        return (
            <SidebarNavItemsWrapper>
            {options && options.map(option => {
                return (
                    <SidebarNavItem>
                        {option.url ? (
                            <Link to={option.url}>
                                <Typography type="p7" color="white">
                                    {option.label}
                                </Typography>
                            </Link>
                        ):(
                            <ButtonWrapper>
                                <Typography type="p7" color="white">
                                    {option.label}
                                </Typography>
                            </ButtonWrapper>
                        )}
                    </SidebarNavItem>
                )
            })}
            </SidebarNavItemsWrapper>
        )
    }

    return (
        <nav>
        <HeaderNavItemsWrapper screenType={size.type}
        >
            {options && options.map(option => {
                const isExpandable = option.subNavOptions && option.subNavOptions?.length > 0;
                return (
					<HeaderNavItem
						key={option.id}
						onMouseEnter={() => onNaigationHoverHandler(option)}
                        onMouseLeave={() => onNaigationLeaveHandler()}
						onClick={() => onNaigationClickHandler(option)}
					>
						{option.url ? (
                            <Link to={option.url}>
                                <LinkText isTitle>
                                    <Typography name="link-text" type="p3">
                                        {option.label}
                                    </Typography>
                                    {showDropdownArrow && isExpandable && (
                                        <NavExpandIconWrapper expanded={isExpanded === option.id}>
                                            <ImageContainer source={navExpandIcon || DownArrow} alt="" />
                                        </NavExpandIconWrapper>
                                    )}
                                </LinkText>
                            </Link>
                        ):(
                        <ButtonWrapper>
                            <LinkText isTitle>
                                <Typography name="link-text" type="p3">
                                    {option.label}
                                </Typography>
                                {showDropdownArrow && isExpandable && (
                                    <NavExpandIconWrapper expanded={isExpanded === option.id}>
                                        <ImageContainer source={navExpandIcon || DownArrow} alt="" />
                                    </NavExpandIconWrapper>
                                )}
                            </LinkText>
                        </ButtonWrapper>
                        )}
                        {showDropdown && isExpanded === option.id && option.subNavOptions && option.subNavOptions.length > 0 && (
                            <SubNavOptions 
                            // ref={subNavRef}
                            >
                                {option.subNavOptions.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.url}>
                                            <LinkText>{item.label}</LinkText>
                                        </Link>
                                    </li>
                                ))}
                            </SubNavOptions>
                        )}
					</HeaderNavItem>
				)}
            )}
        </HeaderNavItemsWrapper>
        </nav>
    )
}

export default NavItems





