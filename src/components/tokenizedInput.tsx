import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { atomTokenInputState } from "../state/atoms/formState/tokenInput";
import { isNullOrUndefined, isNumeric } from "../utils/helpers";

const initArray = (inputLength: number) => {
    let arr: number[] = [];
    for (let index = 0; index < inputLength; index++) {
        arr.push(index);
    }
    return arr;
}

const TokenizedInput = ({ inputLength = 6,
    onType,
    onDelete,
    tokenType = "number",
    name = "token" }: any) => {
    const [tokenInputData, setTokenInputData] = useRecoilState(atomTokenInputState);

    const refs = useMemo(() => initArray(inputLength).map((_val, _i: any) => {
        return React.createRef<HTMLInputElement>();
    }), []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        let val: string = e.target.value.toString();
        let index = e.target.name.split("_")[1]
        if ((!isNullOrUndefined(tokenInputData.inputToken))) {
            if (tokenType === "number") {
                if (isNumeric(val)) {
                    onType({ val: val, index: index });
                }
            } else {
                onType({ val: val, index: index });
            }
        }
    };

    const onKeyDown = useMemo(() =>
        (e: any) => {
            let index = e.target.name.split("_")[1]
            if (e.key === 'Delete' || e.key === 'Backspace') {
                e.target.value = "";
                if (index > 0) {
                    refs[index - 1].current?.focus();
                } else {
                    refs[index].current?.focus();
                }
                onDelete(index);
            }
        }, []);


    const [accDigitJsxElements,] = useState<JSX.Element[]>(
        () => {
            const filler: JSX.Element[] = [];
            let size = Math.round(100 / 6);
            for (let index = 0; index < inputLength; index++) {
                filler.push(
                    <input
                        type={"password"}
                        ref={refs[index]}
                        key={"otpBox" + index}
                        name={name.concat("_", index)}
                        style={{
                            width: String(size - 2).concat('%'),
                            marginLeft: "2px"
                        }} value={refs[index].current?.value}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className={"short-input text-center otpBox"} maxLength={1} />

                );
            }

            return filler;
        }
    );

    const defineFocus = (enterTokenValueLength: number) => {
        if (enterTokenValueLength <= inputLength) {
            if (refs[enterTokenValueLength] != null && refs[enterTokenValueLength] != undefined) {
                refs[enterTokenValueLength].current?.focus();
            }
        } else {
            return;
        }
    }

    useEffect(() => {
        if (!isNullOrUndefined(tokenInputData.inputToken)) {
            let enteredTokenValueLength = tokenInputData.inputToken?.length;
            defineFocus(enteredTokenValueLength);
        }
    }, [tokenInputData]);

    return (
        <div className="flex justify-content-between">
            {accDigitJsxElements}
        </div>
    )
}

export default TokenizedInput;