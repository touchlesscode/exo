import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function IncomingMessage({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5 5.497h-6c-.7 0-.7 1 0 1h6c.6 0 .7-1 0-1zM4.5 8.495h4c.7 0 .6 1 0 1h-4c-.7 0-.7-1 0-1z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 1.5h14c.6 0 1 .4 1 1v9.993c0 .6-.4 1-1 1H6.4L4.7 15.19c-.7.7-1.7.1-1.7-.7v-.999H1c-.6 0-1-.4-1-1V2.5C0 1.9.4 1.5 1 1.5zm1 9.994h12V3.499H2v7.995z"
                fill={color}
            />
        </svg>
    )
}

export default IncomingMessage
