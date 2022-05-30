export const CardIcon = ({ 
    height = "512",
    width = "512",
    className = "icons-svg",
    strokeWidth = "2",
    stroke = "currentColor",
    fill = "none"
}: any) => {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            fill={fill}
            stroke={stroke}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    )
}