import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Warning({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M30.825 25.667l-12.462-23.8a2.666 2.666 0 00-4.724 0l-12.464 23.8a2.666 2.666 0 002.362 3.904h24.926a2.667 2.667 0 002.362-3.904zM14.667 10.23a1.334 1.334 0 012.666 0v8a1.334 1.334 0 01-2.666 0v-8zm1.4 15.346h-.038A2.037 2.037 0 0114 23.617a1.966 1.966 0 011.93-2.04h.038A2.036 2.036 0 0118 23.533a1.968 1.968 0 01-1.933 2.044z"
                fill={color}
            />
        </svg>
    )
}

export default Warning