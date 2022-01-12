function EmojiIcon({ size = 24, color = 'gray'}) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
            <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />
            <path d="M16.492 14.13a1 1 0 00-1.362.378A3.656 3.656 0 0112 16.5a3.656 3.656 0 01-3.13-1.992 1 1 0 00-1.74.984A5.624 5.624 0 0012 18.5a5.624 5.624 0 004.87-3.008 1 1 0 00-.378-1.362z" />
            <circle cx={8} cy={9} r={2} />
            <circle cx={16} cy={9} r={2} />
        </svg>
    );
}

export default EmojiIcon;
