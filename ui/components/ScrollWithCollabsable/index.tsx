import React, { useEffect, useState } from "react";
import useScrollDirection from "@hooks/useScrollDirection";

interface ScrollWithCollabsableProps {
    children: any;
    initialHeight: number;
    collapsableTarget: string;
}
function ScrollWithCollabsable(props: ScrollWithCollabsableProps) {
    const { children, collapsableTarget, initialHeight } = props;

    const scrollDirection = useScrollDirection();
    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            const ele = document.getElementById("collapsable-list");
            if (!!ele) {
                const strHeight = ele?.style.top.replace("px", "");
                //@ts-ignore
                const height = parseInt(strHeight);
                //@ts-ignore
                const scrollTop = document.documentElement.scrollTop;
                console.log({scrollTop})
                if (scrollTop <=11) {
                    //@ts-ignore
                    ele.style.top = `${initialHeight - 25}px`;
                    return;
                }
                if (height !== 0) {
                    //@ts-ignore
                    ele.style.top = `${
                        height
                            ? scrollDirection === "scrolling down"
                                ? initialHeight - scrollTop
                                : initialHeight + scrollTop
                            : 30
                    }px`;
                }
            }
        }
    }, []);
    return (
        <>
            <>{children[0]}</>
            {children.map((i: any, index: number) => {
                return !!index && i;
            })}
        </>
    );
}

export default ScrollWithCollabsable;
