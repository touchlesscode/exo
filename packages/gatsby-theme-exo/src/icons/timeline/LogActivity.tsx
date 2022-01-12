import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function LogActivity({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 8.52c0 4.107 3.057 7.485 7.001 7.982V8.338l-.003.003-.85.857c-.947.931-2.36-.488-1.416-1.422l2.56-2.57a.996.996 0 011.416 0l2.56 2.579c.897.916-.375 2.382-1.416 1.422l-.847-.85-.006-.006v8.151C12.943 16.005 16 12.627 16 8.52c-.028-10.662-16-10.724-16 0z"
                fill={color}
            />
        </svg>
    )
}

export default LogActivity