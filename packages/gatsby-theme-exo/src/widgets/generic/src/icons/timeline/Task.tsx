import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function Task({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)" fill={color}>
                <path d="M6.943 9.52l-.917 1.146a.093.093 0 01-.152 0l-.52-.52a.5.5 0 00-.707.707l1 1A.498.498 0 006 12h.027a.5.5 0 00.364-.186l1.333-1.667a.5.5 0 00-.781-.625zM6.943 5.854l-.917 1.145a.093.093 0 01-.152 0l-.52-.52a.5.5 0 00-.707.708l1 1A.499.499 0 006 8.333h.027a.5.5 0 00.364-.187l1.333-1.667a.5.5 0 10-.781-.624v-.001zM10.667 7H9a.5.5 0 000 1h1.667a.5.5 0 100-1zM10.667 10.666H9a.5.5 0 000 1h1.667a.5.5 0 000-1z" />
                <path d="M14.471 4.304l-3.61-3.61a.667.667 0 00-.47-.194H2.667a1.333 1.333 0 00-1.334 1.333v13.334A1.333 1.333 0 002.667 16.5h10.666a1.334 1.334 0 001.334-1.333V4.775a.667.667 0 00-.196-.471zm-1.138 10.53a.333.333 0 01-.333.333H3a.333.333 0 01-.333-.334V2.167A.333.333 0 013 1.833h6.833A.167.167 0 0110 2v1.833a1.333 1.333 0 001.333 1.334h1.834a.166.166 0 01.166.166v9.5z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Task