import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function CallOutgoing({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)" fill={color}>
                <path d="M11.445 11.275a1.667 1.667 0 00-2.357 0l-.257.256a31.269 31.269 0 01-3.859-3.86l.257-.256a1.667 1.667 0 000-2.357L3.815 3.644a1.667 1.667 0 00-2.358 0l-.776.775a2.34 2.34 0 00-.294 2.934 31.27 31.27 0 008.761 8.764 2.36 2.36 0 002.933-.296l.777-.776a1.667 1.667 0 000-2.356l-1.413-1.414zM15.333.505h-3.2a.667.667 0 00-.466 1.138l.889.89-3.933 3.93a1 1 0 101.414 1.414l3.934-3.93.889.89a.666.666 0 001.14-.47V1.17a.667.667 0 00-.667-.666z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default CallOutgoing
