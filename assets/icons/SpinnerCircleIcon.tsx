export const SpinnerCircleIcon = ({ width = "200px", height = "200px" }: any) => {
    return (
        <svg  className="spinner-circle-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(50,50)">
                <g transform="scale(0.7)">
                    <circle cx="0" cy="0" r="50" fill="#6da888"></circle>
                    <circle cx="0" cy="-28" r="15" fill="#0c3434">
                        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
                    </circle>
                </g>
            </g>
        </svg>
    )
}