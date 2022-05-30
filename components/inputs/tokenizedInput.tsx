import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { clearTokenInputData } from "../../state/reducers/tokenizedInputReducer";
import { isNullOrUndefined, isNumeric } from "../../utils/helpers";

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
    name = "token",
    resendText = "",
    onResend }: any) => {

    const tokenInputData = useAppSelector(
        (state: any) => state.tokenizedInputReducer?.tokenInputData
    );
    const dispatch = useAppDispatch();

    const [isAppend, setIsAppend] = useState(false);
    const [accDigitJsxElements, setAccDigitJsxElements] = useState<JSX.Element[]>([]);

    const refs = useMemo(() => initArray(inputLength).map((_val, _i: any) => {
        return React.createRef<HTMLInputElement>();
    }), []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        let val: string = e.target.value.toString();
        let index = e.target.name.split("_")[1]
        if ((!isNullOrUndefined(tokenInputData))) {
            if (tokenType === "number") {
                if (isNumeric(val)) {
                    onType({ val: val, index: index });
                    setIsAppend(true);
                }
            } else {
                onType({ val: val, index: index });
                setIsAppend(true);
            }
        }
    };

    const onKeyDown = useMemo(() =>
        (e: any) => {
            let index = e.target.name.split("_")[1]
            if (e.key === 'Delete' || e.key === 'Backspace') {
                setIsAppend(false);
                onDelete(index);
                e.target.value = "";
                console.log("delete::", index)
                if (index > 0) {
                    console.log("delete::", refs[index - 1])
                    refs[index - 1].current?.focus();
                } else {
                    refs[0].current?.focus();
                }

            }
        }, []);




    const defineFocus = (enterTokenValueLength: number) => {
        console.log("enterTokenValueLength:::", enterTokenValueLength)
        if (enterTokenValueLength <= inputLength) {
            if (refs[enterTokenValueLength] != null && refs[enterTokenValueLength] != undefined) {
                refs[enterTokenValueLength].current?.focus();
            }
        } else {
            return;
        }
    }
    useEffect(() => {
        dispatch(clearTokenInputData());
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
                    autoFocus={index=== 0}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    className={"short-input text-center otpBox"} maxLength={1} />
            );
        }

        setAccDigitJsxElements(filler);
    }, [])

    useEffect(() => {
        if (!isNullOrUndefined(tokenInputData)) {
            if (!isAppend) {
                return;
            }
            let enteredTokenValueLength = tokenInputData?.length;
            defineFocus(enteredTokenValueLength);
        }
    }, [tokenInputData]);

    return (
        <>
            <div className="flex content-center h-56 grid gap-4">
                <div className="flex justify-center items-center">
                    {accDigitJsxElements}
                </div>
                {resendText.length > 0 && <div className="flex justify-center align-center mb-2 cursor-pointer mt-1" onClick={onResend}>
                    <p><svg className="icons-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>{resendText}</p>
                </div>}
            </div>
        </>
    )
}

export default TokenizedInput;