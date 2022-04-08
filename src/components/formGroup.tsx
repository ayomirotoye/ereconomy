import React from "react";
import ReactTooltip from "react-tooltip";
import { hasKeys, isNullOrUndefined } from "../utils/helpers";
const format = "HH:mm";
function FormGroup({
    input_type, on_change, elRef, input_name, place_holder, input_id, input_key, error, is_readonly, input_value, label_value = "", div_classname, style, label_style = {}, clickable_label = {}, input_class_name = "", has_addon = {},
}: any) {
    let inputGroupArr: any = ["text", "email", "number", "phone"];
    let inputGroupDate: any = ["date"];
    let inputGroupRange: any = ["range"];

    let inputClassName = input_class_name.length > 0
        ? input_class_name.concat(" form-control")
        : error
            ? "form-control"
            : "form-control";

    const defineInputType = (type: any) => {
        let inputType: string;
        switch (type) {
            case "text":
                inputType = "text";
                break;
            case "email":
                inputType = "email";
                break;
            case "password":
                inputType = "password";
                break;
            case "number":
                inputType = "number";
                break;
            case "phone":
                inputType = "phone";
                break;
            case "checkbox":
                inputType = "checkbox";
                break;
            case "select":
                inputType = "select";
                break;
            case "radio":
                inputType = "radio";
                break;
            case "date":
                inputType = "date";
                break;
            case "time":
                inputType = "time";
                break;
            case "range":
                inputType = "range";
                break;
            default:
                inputType = "text";
                break;
        }

        return inputType;
    };

    let inputItem = inputGroupArr.indexOf(defineInputType(input_type)) > -1 ? (
        on_change ? (
            <input
                type={defineInputType(input_type)}
                placeholder={place_holder}
                key={input_key}
                id={input_id}
                name={input_name}
                className={inputClassName}
                onChange={on_change ? on_change : null}
                value={input_type === "number"
                    ? input_value <= 0
                        ? ""
                        : input_value
                    : input_value}
                ref={elRef}
                readOnly={is_readonly ? is_readonly : false}
                style={style}
            ></input>
        ) : (
            <input
                type={defineInputType(input_type)}
                key={input_key}
                id={input_id}
                name={input_name}
                className={inputClassName}
                defaultValue={input_value}
                ref={elRef}
                readOnly={is_readonly ? is_readonly : false}
                style={style} />
        )
    ) : inputGroupDate.indexOf(defineInputType(input_type)) > -1 ? (
        <input
            type={defineInputType(input_type)}
            key={input_key}
            id={input_id}
            name={input_name}
            className={inputClassName}
            ref={elRef}
            onChange={on_change ? on_change : null}
            readOnly={is_readonly}
            style={style}
            value={input_value} />
    ) 
    // : inputGroupTime.indexOf(defineInputType(input_type)) > -1 ? (
        // <TimePicker
        //     className="w-100 form-control timepicker-style"
        //     defaultValue={moment("12:08", format)}
        //     format={format}
        //     onChange={(time: any, timeString: any) => on_change(moment().milliseconds(time).valueOf(), timeString)} />
    // ) 
    : inputGroupRange.indexOf(defineInputType(input_type)) > -1 ? (
        <input
            type={defineInputType(input_type)}
            key={input_key}
            id={input_id}
            name={input_name}
            className={inputClassName}
            ref={elRef}
            onChange={on_change ? on_change : null}
            readOnly={is_readonly}
            style={style} />
    ) : defineInputType(input_type) === "password" ? (
        on_change ? (
            <input
                type={defineInputType(input_type)}
                key={input_key}
                id={input_id}
                name={input_name}
                className={inputClassName}
                onChange={on_change ? on_change : null}
                value={input_value}
                ref={elRef}
                readOnly={is_readonly ? is_readonly : false}
                style={style} />
        ) : (
            <input
                type={defineInputType(input_type)}
                key={input_key}
                id={input_id}
                name={input_name}
                className={inputClassName}
                onChange={on_change ? on_change : null}
                value={input_value}
                ref={elRef}
                defaultValue={""}
                readOnly={is_readonly ? is_readonly : false}
                style={style} />
        )
    ) : (
        <input
            type={defineInputType(input_type)}
            key={input_key}
            id={input_id}
            name={input_name}
            className={inputClassName}
            onChange={on_change ? on_change : null}
            value={input_value}
            defaultValue={""}
            ref={elRef}
            placeholder={place_holder}
            readOnly={is_readonly ? is_readonly : false}
            style={style} />
    );

    return (
        <>
            <div className={div_classname ?? "form-group"}>
                <div className="d-flex justify-content-between">
                    {hasKeys(clickable_label) ? (
                        <label
                            htmlFor={input_type}
                            style={Object.assign(label_style, { width: "100%" })}
                            dangerouslySetInnerHTML={{
                                __html: "<div class='d-flex justify-content-between'>".concat(
                                    "<div>",
                                    clickable_label.label_value?.concat(
                                        "</div>",
                                        !isNullOrUndefined(error) && error?.hasError
                                            ? "<div class='is-required' style=''>(required)</div>"
                                            : "",
                                        "</span><span class='info-icon'></span>"
                                    ) ?? "",
                                    "</div>"
                                ),
                            }}
                            data-tip={clickable_label.label_info}
                        ></label>
                    ) : (
                        <label
                            htmlFor={input_type}
                            style={Object.assign(label_style, { width: "100%" })}
                            dangerouslySetInnerHTML={{
                                __html: "<div class='d-flex justify-content-between'>".concat(
                                    "<div>",
                                    label_value?.concat(
                                        "</div>",
                                        (!isNullOrUndefined(error) && error?.hasError) ||
                                            (input_type === "number" && input_value < 0)
                                            ? "<span class='is-required'>(required)</span>"
                                            : ""
                                    ),
                                    "</div>"
                                ),
                            }}
                        ></label>
                    )}
                </div>
                {<React.Fragment>
                    <>
                        {hasKeys(has_addon) ? (
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    {has_addon.icon ?? "@"}
                                </span>

                                {inputItem}
                            </div>
                        ) : (
                            inputItem
                        )}
                    </>
                </React.Fragment>}
            </div>
            <ReactTooltip className={"bg-primary"} />
        </>
    );
}
export default FormGroup;
