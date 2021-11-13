import React, { FC } from "react";

import { HamburgerWrapper, HamburgerSpan } from "./style";

interface HamburgerPropType {
    shadow ?: boolean;
}

const Hamburger:FC<HamburgerPropType> = ({ shadow }) => {

    return (
        <HamburgerWrapper>
            <HamburgerSpan shadow={shadow}></HamburgerSpan>
            <HamburgerSpan shadow={shadow}></HamburgerSpan>
            <HamburgerSpan shadow={shadow}></HamburgerSpan>
        </HamburgerWrapper>
    )
}

export default Hamburger
