function SendIcon({ size = 24, color = 'gray'}) {
    return (
        <svg viewBox="0 0 23 23" width={size} height={size} fill={color}>
            <path d="M22.4644 11.3392C22.465 11.272 22.4453 11.2062 22.4078 11.1505C22.3704 11.0947 22.317 11.0515 22.2546 11.0266L6.74586 4.85076C6.68753 4.82773 6.62389 4.82163 6.56224 4.83314C6.5006 4.84466 6.44345 4.87334 6.39737 4.91587C6.35129 4.95841 6.31814 5.01308 6.30174 5.07361C6.28533 5.13414 6.28633 5.19807 6.30463 5.25806L7.78437 10.0669C7.79319 10.0985 7.81121 10.1268 7.83613 10.1482C7.86105 10.1696 7.89176 10.1831 7.92438 10.1871L16.6878 11.1252C16.7291 11.129 16.7675 11.1482 16.7954 11.1789C16.8234 11.2096 16.8388 11.2496 16.8388 11.2911C16.8388 11.3326 16.8234 11.3726 16.7954 11.4033C16.7675 11.434 16.7291 11.4531 16.6878 11.457L7.92438 12.3951C7.89192 12.3985 7.8612 12.4115 7.83604 12.4323C7.81089 12.4531 7.79242 12.4808 7.78295 12.512L6.30322 17.3208C6.2854 17.3787 6.28372 17.4404 6.29833 17.4992C6.31295 17.558 6.34332 17.6117 6.38618 17.6546L6.39514 17.6635C6.44117 17.7061 6.49827 17.7349 6.55989 17.7464C6.62151 17.758 6.68516 17.752 6.74351 17.7291L22.2527 11.6479C22.3149 11.6236 22.3682 11.5811 22.406 11.5261C22.4437 11.471 22.4641 11.4059 22.4644 11.3392Z" fill="#E6E6E6" />
        </svg>
    );
}

export default SendIcon;