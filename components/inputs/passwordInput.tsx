import { useState } from "react";
import { EyeIcon } from "../../assets/icons/EyeIcon";
import FormGroup from "./formGroup";

export const PasswordInput = ({ handleInputChange, value, error, label="Password", inputName="password"}: any) => {
    const [isToggled, setToggled] = useState(false);

    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 position-relative">
                <FormGroup
                    input_name={inputName}
                    label_value={label}
                    input_type={isToggled ? "text": "password"}
                    input_id={inputName}
                    is_readonly={false}
                    on_change={handleInputChange}
                    input_value={value}
                    error={{
                        hasError: error?.password,
                        message: error?.password,
                    }}
                />
                <div className="position-eye cursor-pointer" onClick={() => { setToggled(!isToggled) }}>
                    <EyeIcon />
                </div>
            </div>
        </div>
    );
}