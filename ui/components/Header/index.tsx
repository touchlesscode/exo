import React, { FC } from "react";

import Hamburger from "@components/Hamburger";
import ImageContainer from "@components/ImageContainer";
import NavItems from "@components/NavItems";
import TypesenseSearch from "@components/TypesenseSearch";

import { HeaderWrapper, HeaderRow, IconWrapper, HeaderTray, SearchWrapper } from "./style";
import { HeaderPropsType } from "./type";
import useScrollDirection from "@hooks/useScrollDirection";
import Typography from "@components/Typography";
import Link from "@components/Link";
import useWindowSize from "@hooks/useWindowSize";
import ThemeToggler from "@components/ThemeToggler"
import { actions } from "@reducers/themeReducer"
import { useDispatch, useSelector } from "react-redux"
import { useTheme } from "styled-components"
import { themeSelector } from "@selectors/themeSelectors"

const Header: FC<HeaderPropsType> = ({
	options,
	transparent,
	position,
	headerContentOrder,
	showOnScrollUp,

	onNavClick,
	onNavHover,

	leftIcon,
	leftIconShadow,
	onLeftIconClick,

    rightIcon,
	rightIconWidth,
	rightIconHeight,

	brand,
	searchPlaceholder,

	showDropdownArrow,
	showDropdown,

	navExpandIcon,
}) => {
	const scrollDirection = useScrollDirection()
	const themeState = useSelector(themeSelector)
	const dispatch = useDispatch()
	const { type } = useWindowSize()
 
	return (
		<HeaderWrapper
			position={position}
			transparent={transparent}
			scrollDir={showOnScrollUp ? scrollDirection : undefined}
		>
			<HeaderRow direction={headerContentOrder}>
                <IconWrapper screenType={type} hideOnSmallScreen onClick={onLeftIconClick}>
                    {leftIcon ? 
                    <ImageContainer source={leftIcon} alt="" />:
                    <Hamburger shadow={leftIconShadow} />
                    }
                </IconWrapper>
				{brand && (
                    <Link to="/" >
                        <Typography type="h1" color="primary">
                        {/* <noselect></noselect> */}
                        {brand}
                        </Typography>
                    </Link>
				)}
				<SearchWrapper screenType={type}>
					<TypesenseSearch searchPlaceholder={searchPlaceholder} />
				</SearchWrapper>
				{options && (
					<NavItems
						options={options}
						onNavClick={onNavClick}
						onNavHover={onNavHover}
						showDropdown={showDropdown}
						showDropdownArrow={showDropdownArrow}
						navExpandIcon={navExpandIcon}
					/>
				)}

				{themeState.showThemeToggler && (
					<ThemeToggler
						checked={themeState.themeType === "dark"}
						onChange={(isChecked: boolean) => {
							dispatch(actions.setThemeType(isChecked ? "dark" : "light"))
						}}
					/>
				)}
				{rightIcon && (
					<IconWrapper iconWidth={rightIconWidth} iconHeight={rightIconHeight}>
						<ImageContainer source={rightIcon} alt="rightIcon" />
					</IconWrapper>
				)}
			</HeaderRow>
			<HeaderTray screenType={type}>
				<TypesenseSearch searchPlaceholder={searchPlaceholder} />
			</HeaderTray>
		</HeaderWrapper>
	)
}

export default Header;
