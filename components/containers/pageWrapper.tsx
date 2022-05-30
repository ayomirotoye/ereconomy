import Header from "../header";

type pageWrapperProps = {
    isHeaderVisible?: boolean;
    children: any
}
const PageWrapper = ({ isHeaderVisible = true, children }: pageWrapperProps) => {
    return (
        <div>
            <Header isVisible={isHeaderVisible} />
            {children}
        </div>
    )
}

export default PageWrapper;