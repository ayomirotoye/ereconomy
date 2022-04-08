import React from "react";
import Header from "../components/header";

type pageWrapperProps = {
    isHeaderVisible?: boolean;
    children: any
}
const PageWrapper = ({ isHeaderVisible = true, children }: pageWrapperProps) => {
    return (
        <>
            <Header isVisible={isHeaderVisible} />
            {children}
        </>
    )
}

export default PageWrapper;