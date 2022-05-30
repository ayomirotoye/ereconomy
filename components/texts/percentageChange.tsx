import { DynamicP } from "../../styles/htmlElements"

export const PercentageChange = ({text}: any) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <DynamicP fontWeight={900} fontSize="0.75em" style={{
                marginTop: "17px"
            }}>{text}</DynamicP>
        </div>
    )
}

export default PercentageChange;