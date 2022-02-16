import React, { useEffect, useState } from "react";

import Flex from "@components/Flex";

import LeftArrow from "@assets/icons/arrow-left.svg";
import RightArrow from "@assets/icons/arrow-right.svg";
import useWindowSize from "@hooks/useWindowSize";
import { ScrollArrow } from "./style";

interface ScrollerLayoutProps {
  children: Array<React.ReactNode>;
  rightArr?: string;
  leftArr?: string;
  idPrefix: string;
  targetId: string;
  scrollOffSet?: number;
}
function ScrollerLayout(props: ScrollerLayoutProps) {
  const [offset, setOffset] = useState(0);
  const elem = document.getElementById(props.targetId);
  const { type } = useWindowSize();

  const onScroll = (direction: number) => {
    if (elem && offset >= 0) {
      const targetOffSet = 100 * (props.scrollOffSet || 1) * direction;
      const newOffset = offset + targetOffSet;
      elem.scrollLeft = newOffset;
      setOffset(newOffset);
    }
  };
  const targetOffSet = props.scrollOffSet || 1;
  return (
    <>
      <Flex
        id={props.targetId}
        sx={{
          maxWidth: "100%",
          overflowY: "hidden",
          overflowX: type !== "sm" ? "hidden" : "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {type !== "sm" && (
          <>
            {offset > 0 && (
              <Flex
                onClick={(e) => {
                  onScroll(-1);
                }}
                direction={"column"}
                justify="center"
              >
                <ScrollArrow left={30}>
                  <img src={props.leftArr || LeftArrow} alt="" width={20} />
                </ScrollArrow>
              </Flex>
            )}
            {offset + targetOffSet < (elem?.scrollWidth || 0) && (
              <Flex
                onClick={(e) => {
                  onScroll(1);
                }}
                direction={"column"}
                justify="center"
              >
                <ScrollArrow
                  style={{
                    right: 0,
                  }}
                  right={30}
                >
                  <img src={props.rightArr || RightArrow} alt="" width={20} />
                </ScrollArrow>
              </Flex>
            )}{" "}
          </>
        )}
        {props.children}
      </Flex>
    </>
  );
}

export default ScrollerLayout;
