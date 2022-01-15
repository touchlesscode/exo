import * as React from "react";

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Close({ width = 16, height = 16, color }: props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.15 6.09a.125.125 0 010-.177l4.632-4.631A.75.75 0 0010.72.222L6.089 4.85a.125.125 0 01-.177 0L1.28.221A.75.75 0 10.22 1.281l4.63 4.632a.125.125 0 010 .177L.22 10.72a.75.75 0 001.06 1.06l4.632-4.63a.125.125 0 01.177 0l4.63 4.63a.75.75 0 101.062-1.06L7.15 6.09z"
        fill={color}
      />
    </svg>
  )
}

export default Close