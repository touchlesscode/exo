import React, { FC } from "react"
import { useLocation } from "@reach/router"
import { HamburgerWrapper, HamburgerSpan } from "./style"
import { isBrowser } from "@utils/isBrowser"

interface HamburgerPropType {
  shadow?: boolean,
  linkColor?: string,
  onClick?:any
}

const Hamburger: FC<HamburgerPropType> = ({ shadow, linkColor,onClick }) => {
  const location = isBrowser && useLocation()
  const pathname = location.pathname
  return (
    <HamburgerWrapper onClick={onClick}>
      <HamburgerSpan shadow={shadow} pathname={pathname} style={{ backgroundColor: linkColor }}></HamburgerSpan>
      <HamburgerSpan shadow={shadow} pathname={pathname} style={{ backgroundColor: linkColor }}></HamburgerSpan>
      <HamburgerSpan shadow={shadow} pathname={pathname} style={{ backgroundColor: linkColor }}></HamburgerSpan>
    </HamburgerWrapper>
  )
}

export default Hamburger;
