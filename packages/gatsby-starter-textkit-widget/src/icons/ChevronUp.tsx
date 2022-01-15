import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function ChevronUp({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.83 4.464L4.41.899a.568.568 0 00-.822 0L.17 4.464C-.194 4.846.066 5.5.581 5.5H7.42c.515-.004.775-.654.41-1.036z"
                fill={color}
            />
        </svg>
    )
}

export default ChevronUp