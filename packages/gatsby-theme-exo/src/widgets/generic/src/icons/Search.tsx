import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Search({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.122 9.643l3.673 3.66a.701.701 0 01-.499 1.196.703.703 0 01-.497-.204L9.12 10.63a5.648 5.648 0 01-3.45 1.177C2.543 11.806 0 9.27 0 6.153 0 3.036 2.544.5 5.67.5c3.127 0 5.67 2.536 5.67 5.653a5.61 5.61 0 01-1.218 3.49zm-4.45-7.74c-2.352 0-4.265 1.906-4.265 4.25 0 2.343 1.913 4.25 4.264 4.25s4.264-1.907 4.264-4.25c0-2.344-1.913-4.25-4.264-4.25z"
                fill={color}
            />
        </svg>
    )
}

export default Search