import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function DNC({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm4.333 8.667A.333.333 0 0112 9H4a.333.333 0 01-.333-.333V7.333A.333.333 0 014 7h8a.333.333 0 01.333.333v1.334z"
                fill={color}
            />
        </svg>
    )
}

export default DNC