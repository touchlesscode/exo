import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Filter({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 2c0 .552-.522 1-1.165 1H1.165C.522 3 0 2.552 0 2s.522-1 1.165-1h13.67C15.478 1 16 1.448 16 2zM14 8c0 .552-.516 1-1.153 1H3.153C2.516 9 2 8.552 2 8s.516-1 1.153-1h9.694C13.484 7 14 7.448 14 8zM11 14c0 .552-.495 1-1.106 1H6.106C5.496 15 5 14.552 5 14s.495-1 1.106-1h3.788c.611 0 1.106.448 1.106 1z"
                fill={color}
            />
        </svg>
    )
}

export default Filter