import React, { useState } from "react";
import { useMemo } from "react";
import {
  isEmptyString,
  isNullOrUndefined,
  isObject,
} from "../utils/helpers";

const useDropdownExtended = ({
  label = "",
  defaultState = "",
  options,
  name = "",
  dropdownOptionsType = "",
  errors = {},
  divClassName="form-group",
  placeHolder="-- please choose --"
}: any) => {
  const [state, setState] = useState(defaultState);
  const [optionsArr, setOptionsArr] = useState(Object.assign([]));

  useMemo(() => {
    let listItem: any = [];
    if (
      isNullOrUndefined(dropdownOptionsType) ||
      isEmptyString(dropdownOptionsType)
    ) {
      options?.map(({ id, name }: any, index: number) => {
        return defaultState === "" ? (
          <option key={id.concat("_" + index)} value={id ?? ""}>
            {name ?? label?.concat(" ", String(index + 1))}
          </option>
        ) : (
          <option key={id.concat("_" + index)} value={id ?? ""}>
            {name ?? label?.concat(" ", String(index + 1))}
          </option>
        );
      });
    }
    setOptionsArr(listItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const DropdownBuilder = () => (
    <div className={divClassName} key={name}>
      <div className="d-flex justify-content-between">
        <label
          htmlFor={label}
          className="width-100"
          dangerouslySetInnerHTML={{
            __html: "<div class='d-flex justify-content-between'>".concat(
              "<div>",
              label?.concat(
                "</div>",
                !isNullOrUndefined(errors) && errors?.hasError
                  ? "<div class='is-required' style=''>(required)</div>"
                  : ""
              ) ?? "",
              "</div>"
            ),
          }}
        ></label>
      </div>
      <select
        id={name ?? label?.toLowerCase()}
        name={name ?? label?.toLowerCase()}
        onChange={(e: any) => {
          if (!["BANKS", "ACCOUNTS_EXTRA_DATA"].includes(dropdownOptionsType)) {
            setState(e.target.value);
          } else {
            const {
              target: {
                selectedOptions: [option],
              },
            } = e;
            setState(option.getAttribute("data-extras"));
          }
        }}
        onBlur={(e: any) => {
          if (!["BANKS", "ACCOUNTS_EXTRA_DATA"].includes(dropdownOptionsType)) {
            setState(e.target.value);
          } else {
            const {
              target: {
                selectedOptions: [option],
              },
            } = e;
            setState(option.getAttribute("data-extras"));
            // setState(e.target.value);
          }
        }}
        className={"form-control"}
        defaultValue={defaultState}
        key={name}
      >
        <option key="--Please choose--" value="">
          {placeHolder}
        </option>
        {!isObject(optionsArr) ? optionsArr : []}
      </select>
    </div>
  );
  return [state, DropdownBuilder, setState];
};

export default useDropdownExtended;
