/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useEffect, useRef, useState } from "react";

import { Text } from "theme-ui";

import useWindowSize from "@hooks/useWindowSize";
import useLockBodyScroll from "@hooks/useLockBodyScroll";

import {
  Backdrop,
  Container,
  TextWrapper,
  DropdownButton,
  DropdownContainer,
  DropdownUl,
  DropdownLi,
} from "./styles";
import useDropBgOverlay from "@hooks/useDropBgOverlay";
import useOnClickOutside from "@hooks/useOnClickOutside";
import useFocusTrap from "@hooks/useTrapFocusInside";

interface SortDropdownPropType {
  value: string;
  onSelect: (item: { [key: string]: string }) => void;
  leftText: string;
  sortData: {
    label: string,
    sortBy: string,
    order: string,
  }[];
}

const leftTextStyles = {
  fontSize: "0.938rem",
  lineHeight: "1.406rem",
  fontWeight: "medium",
  color: "#727272",
  fontFamily: "Poppins",
};

const SortDropdown: FC<SortDropdownPropType> = ({
  value,
  onSelect,
  leftText,
  sortData,
}) => {
  const { type } = useWindowSize();

  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dropdownRef = useFocusTrap(showSortDropdown);
  const buttonRef = useRef(null);

  useLockBodyScroll(showSortDropdown);
  useDropBgOverlay(ref, showSortDropdown, { zIndex: '5' });
  useOnClickOutside(ref, () => setShowSortDropdown(false))

  const handleSelect = (item: {
    label: string,
    sortBy: string,
    order: string,
  }) => {
    setShowSortDropdown(false);
    onSelect(item);
  };
  return (
    <Container ref={ref}>
      <TextWrapper screenType={type}>
        <Text sx={leftTextStyles}>{leftText} </Text>
        <DropdownButton
          ref={buttonRef}
          onClick={() => setShowSortDropdown((prev) => !prev)}
        >
          {value}
        </DropdownButton>
      </TextWrapper>
      {showSortDropdown && (
        <DropdownContainer ref={dropdownRef} screenType={type}>
          <DropdownUl>
            {sortData.map((item, index) => (
              <DropdownLi
                key={index}
                data-autofocuse={index === 0 ? true : false}
                tabIndex={0}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </DropdownLi>
            ))}
          </DropdownUl>
        </DropdownContainer>
      )}
    </Container>
  );
};

export default SortDropdown;
