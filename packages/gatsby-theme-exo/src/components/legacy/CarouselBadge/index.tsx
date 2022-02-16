/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from "react";
import { Text, ThemeUIStyleObject } from "theme-ui";

type SlideInfo = {
  item: number;
  itemsCount: number;
};
const CarouselBadge: FC<SlideInfo> = ({ item, itemsCount }) => {
  const badgeStyle = {
    padding: "5px 10px 4px",
    backdropFilter: "blur(32px)",
    borderRadius: "57px",
    color: "white",
    fontSize: "15px",
    lineHeight: "20px",
    top: "20px",
    left: "20px",
    right: "unset",
    bottom: "unset",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    zIndex: "3",
    whiteSpace: "nowrap",
  };
  return (
    <Text sx={badgeStyle as ThemeUIStyleObject}>
      Photo {item}/{itemsCount}
    </Text>
  );
};
export default CarouselBadge;
