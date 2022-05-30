import React from "react";

export const CustomToggle = React.forwardRef(({ children, onClick }: any, ref: any) => {
    return (
        <div
            ref={ref}
            style={{
                height: "20px"
            }}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </div>

    )
});