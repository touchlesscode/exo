import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Activation({ width = 16, height = 16, color }: props) {
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
                <path d="M11 .5a4.333 4.333 0 100 8.667A4.333 4.333 0 0011 .5zM8.737 5.658a.5.5 0 01.708-.707l1 1L12.38 3.37a.5.5 0 11.8.6l-1.936 2.584a1.02 1.02 0 01-1.507.106l-1-1.001z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Activation
