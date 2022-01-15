import * as React from "react";

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Clipboard({ width = 16, height = 16, color }: props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.667 3.167H12A1.333 1.333 0 0113.333 4.5v9.333A1.333 1.333 0 0112 15.167H4a1.333 1.333 0 01-1.333-1.334V4.5A1.333 1.333 0 014 3.167h1.333"
        stroke={color}
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.833H6a.667.667 0 00-.667.667v1.333c0 .369.299.667.667.667h4a.667.667 0 00.667-.667V2.5A.667.667 0 0010 1.833z"
        stroke={color}
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Clipboard