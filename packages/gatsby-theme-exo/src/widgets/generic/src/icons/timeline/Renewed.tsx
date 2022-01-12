import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Renewed({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)" fill={color}>
                <path d="M8 9.706v3.127a.667.667 0 01-.667.667H2.667A.667.667 0 012 12.833V5.5a.667.667 0 01.667-.667h2.847a.163.163 0 00.163-.156c.026-.44.107-.875.24-1.294a.163.163 0 00-.154-.216h-3.43A1.667 1.667 0 00.667 4.833v10A1.667 1.667 0 002.333 16.5h5.334a1.668 1.668 0 001.666-1.667v-4.652a.16.16 0 00-.108-.152 5.314 5.314 0 01-.974-.46.163.163 0 00-.251.137z" />
                <path d="M14.513 5.567a.667.667 0 00-.847.414 2.739 2.739 0 01-4.722.832l1.263-1.266a.333.333 0 00-.236-.569H7a.333.333 0 00-.333.333v2.976a.333.333 0 00.569.235L8 7.759a4.07 4.07 0 006.928-1.345.667.667 0 00-.415-.847zM10.898.5a4.072 4.072 0 00-3.853 2.753.667.667 0 001.262.432 2.733 2.733 0 014.707-.847l-1.22 1.22a.333.333 0 00.235.57h2.97a.333.333 0 00.334-.334V1.323a.333.333 0 00-.57-.236l-.804.806A4.086 4.086 0 0010.898.5z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Renewed