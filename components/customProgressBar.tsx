import { ProgressBar } from "react-bootstrap";
import { ProgressBarProps } from "../types/classes";


const CustomProgressBar = ({ id, now = 50, children }: ProgressBarProps) => {
    return (
        <div className="w-100">
            {children}
            <div className="w-50">
                <ProgressBar id={id} now={now} />
            </div>
        </div>
    );
}

export default CustomProgressBar;