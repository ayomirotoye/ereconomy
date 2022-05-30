import { CloseIcon } from "../../assets/icons/CloseIcon";

const CloseableContainer = ({ children, close }: any) => {
    return (
        <>
            <div className="d-flex justify-content-end mx-5" onClick={close}>
                <CloseIcon />
            </div>
            {children}
        </>
    )
}

export default CloseableContainer;
