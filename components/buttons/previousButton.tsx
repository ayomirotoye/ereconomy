import { useTheme } from "styled-components";
import LoadingButton from "./loadingButton";

const PreviousButton = ({
    goBack
}: any) => {
    const theme = useTheme();
    return (<>
        <LoadingButton
            buttonType="outlined"
            width="25%"
            onClick={goBack}
            buttonText="Previous"
            outlineColor={Object.assign(theme).lightMode.secondaryColor}
        >
        </LoadingButton>
    </>
    )
}

export default PreviousButton;