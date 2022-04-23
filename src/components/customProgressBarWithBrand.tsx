import { ProgressBar } from "react-bootstrap";
import { FormTitle } from "../assets/styles/common";
import { ProgressBarProps } from "../types/classes";
import Brand from "./brand";
import CustomProgressBar from "./customProgressBar";

const defaultClassName = "d-flex justify-content-between align-items-center my-3 ";
const CustomProgressBarWithBrand = ({ id, now = 50, title, className = "" }: ProgressBarProps) => {
    return (
        <div className={className ? defaultClassName.concat(className) : defaultClassName}>
            <CustomProgressBar className={className} id={id} now={now}>
                <FormTitle>{title}</FormTitle>
            </CustomProgressBar>
            <div className="w-100 d-flex justify-content-end">
                <Brand />
            </div>
        </div>
    );
}

export default CustomProgressBarWithBrand;