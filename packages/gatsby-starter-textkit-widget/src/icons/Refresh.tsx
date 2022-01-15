import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Refresh({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.109 13.382a.833.833 0 10-.338 1.631 7.159 7.159 0 10-5.172-4.28.167.167 0 01-.056.2l-.666.484a.667.667 0 00.251 1.192l2.63.566a.667.667 0 00.792-.512l.63-2.934a.667.667 0 00-1.043-.68l-.907.66a.167.167 0 01-.257-.086 5.503 5.503 0 114.136 3.762v-.003z"
                fill={color}
            />
        </svg>
    )
}

export default Refresh