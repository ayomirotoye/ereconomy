import { SpinnerCircleIcon } from "../../assets/icons/SpinnerCircleIcon";
import { StyledButton } from "../../styles/common";
// ../../assets/icons

const LoadingButton = ({
    width = "50%",
    onClick,
    buttonText = "Submit",
    processing = false,
    disabled = false,
    buttonType = "filled",
    icon = <></>,
    fillColor = "",
    outlineColor = "",
    padding = "10px"
}: any) => {
    return (<>
        <StyledButton
            width={width}
            padding={padding}
            fontSize="0.85em"
            onClick={onClick}
            disabled={disabled || processing}
            color={buttonType === "filled" ? fillColor : buttonType === "outlined" ? outlineColor : []}
            backgroundcolor={buttonType === "filled" ? fillColor : buttonType === "outlined" ? "#ffffff" : []}
        >
            {processing ? <SpinnerCircleIcon width="15px" height="15px" /> :
                <div className="d-flex justify-content-center">
                    <span>{icon}</span>
                    <span className="d-none d-lg-block">{buttonText}</span>
                </div>}
        </StyledButton>
    </>
    )
}

export default LoadingButton;