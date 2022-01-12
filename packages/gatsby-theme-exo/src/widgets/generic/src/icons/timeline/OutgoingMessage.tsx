import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function OutgoingMessage({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.5 5.497h6c.7 0 .7 1 0 1h-6c-.6 0-.7-1 0-1zM11.5 8.495h-4c-.7 0-.6 1 0 1h4c.7 0 .7-1 0-1z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 1.5H1c-.6 0-1 .4-1 1v9.993c0 .6.4 1 1 1h8.6l1.7 1.698c.7.7 1.7.1 1.7-.7v-.999h2c.6 0 1-.4 1-1V2.5c0-.6-.4-.999-1-.999zm-1 9.994H2V3.499h12v7.995z"
                fill={color}
            />
        </svg>
    )
}

export default OutgoingMessage
