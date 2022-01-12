import * as React from "react"

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M11.999 24.001a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-3.749-3.749a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47v-7.189a.75.75 0 011.5 0v7.189l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.763.763 0 01-.246.164l-.026.01a.8.8 0 01-.258.045z" />
            <path d="M16.499 16.501a.75.75 0 010-1.5h1.875a4.15 4.15 0 002.92-1.203 4.097 4.097 0 001.213-2.915 4.13 4.13 0 00-4.118-4.132c-.849 0-1.66.253-2.352.732a.751.751 0 01-1.165-.479 6.708 6.708 0 00-2.824-4.326 6.701 6.701 0 00-5.056-1.062A6.71 6.71 0 002.666 4.44a6.712 6.712 0 00-1.062 5.056 6.79 6.79 0 005.934 5.467.746.746 0 01.668.824.75.75 0 01-.819.669C3.781 16.08.799 13.332.13 9.773c-.407-2.166.054-4.36 1.298-6.179S4.55.549 6.716.142a8.244 8.244 0 019.38 5.592 5.507 5.507 0 012.27-.484h.026a5.631 5.631 0 015.614 5.635 5.633 5.633 0 01-5.625 5.615h-1.882z" />
        </svg>
    )
}

export default DownloadIcon