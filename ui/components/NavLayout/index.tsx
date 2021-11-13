import React, { useState } from "react"
import Header from "@components/Header"
import Sidebar from "@components/Sidebar"
import { navOptions } from "@constants/index"

import Car from "@assets/icons/car.svg";
import HeartFill from "@assets/icons/heart-fill.svg";
import AlertBell from "@assets/icons/alert-bell.svg";

import AccountIcon from "@assets/icons/account-icon.svg";
import BackArrow from "@assets/icons/back-arrow.svg";
import CloseIcon from "@assets/icons/close.svg";
import Logo from "@assets/images/Name with Crown.png";

function NavLayout(props: NavLayoutProps) {
	const [openSidebar, setSidebar] = useState(false)
    // const socialIcons = [
    //     {icon: Car, url: "/"},
    //    {icon: HeartFill, url: "/"},
    //     {icon: AlertBell, url: "/"},
    // ];
	return (
		<>
			<Header
				rightIcon={AccountIcon}
				// rightIcon="https://image.shutterstock.com/image-vector/beautiful-design-lt-m-creative-260nw-1650082384.jpg"
				// rightIconWidth="4rem"
				// rightIconHeight="2rem"
				options={navOptions}
				// showOnScrollUp
                // transparent
                // position="absolute"
                // leftIcon={BackArrow}
                // leftIconShadow
                onLeftIconClick={(event) => setSidebar(true)}
                brand="KOONS"
                searchPlaceholder="Make, Model, or Body Style"
                // showDropdown={false}
                // showDropdownArrow={false}
                onNavClick={(option) => console.log("Nav clicked", option)}
                // onNavHover={(option) => console.log("Nav hover", option)}
                // navExpandIcon={AccountIcon}
			/>
			<Sidebar
				open={openSidebar}
				fullSideBar
                leftIcon={CloseIcon}
                // leftIconHeight='2rem'
                // leftIconWidth='8rem'
                // leftIconMargin="0"
                onLeftIconClick={() => setSidebar(false)}

                // rightIcon={CloseIcon}
                // rightIconHeight="4rem"
                // rightIconWidth="4rem"
				// onRightIconClick={() => setSidebar(false)}

				options={navOptions}
                navItemAlignment="flex-start"
                // navExpandIcon={AppleImage}
                footerLinks={[
                    {id: "1", icon: Car, label: "Viewed", url: "/viewed"},
                    {id: "2", icon: HeartFill, label: "Saved", url: "/saved"},
                    // {id: "2", label: "Saved", url: "/saved"},
                    {id: "3", icon: AlertBell, label: "Alerts", url: "/alerts"},
                    // {id: "4", label: "Footer 4", url: "/footer4"},
                    // {id: "5", label: "Footer 4", url: "/footer5"},
                    // {id: "6", label: "Footer 4", url: "/footer6"},
                ]}
                // socialMediaLinks={socialIcons}
			/>
			{props.children}
		</>
	)
}

export default NavLayout
