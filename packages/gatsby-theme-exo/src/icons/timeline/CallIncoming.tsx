import * as React from "react"

interface props {
    width?: number;
    height?: number;
    color: string;
}

function CallIncoming({ width = 16, height = 16, color }: props) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#prefix__clip0)" fill={color}>
                <path d="M11.445 11.274a1.707 1.707 0 00-2.357 0l-.256.257a31.218 31.218 0 01-3.86-3.86l.257-.257a1.667 1.667 0 000-2.357L3.814 3.643a1.707 1.707 0 00-2.357 0L.68 4.42a2.34 2.34 0 00-.294 2.933 31.28 31.28 0 008.761 8.764 2.359 2.359 0 002.933-.295l.776-.776a1.666 1.666 0 000-2.357l-1.412-1.414zM15.705.797a1 1 0 00-1.414 0L10.358 4.73l-.888-.893a.667.667 0 00-1.138.472v3.195a.667.667 0 00.667.667h3.195a.666.666 0 00.473-1.138l-.893-.891 3.933-3.933a1 1 0 00-.002-1.412z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default CallIncoming
