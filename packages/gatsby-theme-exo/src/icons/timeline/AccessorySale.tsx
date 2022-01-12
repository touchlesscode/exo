import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function AccessorySale({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)" fill={color}>
                <path d="M8 9.54v3.293a.667.667 0 01-.667.667H2.667A.667.667 0 012 12.833V5.5a.667.667 0 01.667-.667h2.84a.163.163 0 00.16-.16c.013-.439.08-.873.2-1.295a.163.163 0 00-.154-.211h-3.38A1.667 1.667 0 00.667 4.833v10A1.667 1.667 0 002.333 16.5h5.334a1.668 1.668 0 001.666-1.667v-4.818a.16.16 0 00-.108-.152 5.314 5.314 0 01-.974-.461.163.163 0 00-.251.137z" />
                <path d="M11 .5a4.333 4.333 0 100 8.667A4.333 4.333 0 0011 .5zm-.5 6.833H10a.5.5 0 010-1h1.355a.395.395 0 00.147-.76l-1.375-.551a1.394 1.394 0 01.373-2.68V2a.5.5 0 111 0v.333h.5a.5.5 0 010 1h-1.355a.395.395 0 00-.147.761l1.375.55a1.394 1.394 0 01-.373 2.681v.342a.5.5 0 01-1 0v-.334z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default AccessorySale