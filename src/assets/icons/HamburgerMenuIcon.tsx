
export function HamburgerMenuIcon({ height = "512", width = "512", className = "icons-svg", fill = "", strokeWidth = "10" }: any) {
    return (
        <svg
            id="hamburger-menu-icon"
            enableBackground="new 0 0 512 512"
            height={height}
            viewBox={`0 0 ${height} ${width}`}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path className="st0" d="M24,28H8c-2.2,0-4-1.8-4-4V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C28,26.2,26.2,28,24,28z" />
            <line strokeWidth={strokeWidth} className="st0" x1="10" y1="16" x2="22" y2="16" />
            <line className="st0" x1="10" y1="12" x2="22" y2="12" />
            <line className="st0" x1="10" y1="20" x2="22" y2="20" />
        </svg>
    );
}
