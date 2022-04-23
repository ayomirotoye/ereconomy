import { selector } from "recoil";
import { insertItemsStartingAt, removeItemAtIndex } from "../../utils/arrayUtils";
import { atomTokenInputState } from "../atoms/formState/tokenInput";

export const appendDataToTokenInput = selector({
    key: 'AppendDataToTokenInput',
    get: ({ get }) => get(atomTokenInputState),
    set: ({ set, get }, { val, index }: any) => {

        let tokenInputs = get(atomTokenInputState);
        let newIn = insertItemsStartingAt(tokenInputs.inputToken, index, Array.of(val));
        console.log("newIn::", newIn);
        set(
            atomTokenInputState, Object.assign({ inputToken: newIn })
        )
    }
});

export const removeFromInputData = selector({
    key: 'RemoveFromInputData',
    get: ({ get }) => (get(atomTokenInputState)),
    set: ({ set, get }, index: any) => {
        console.log("index::", index);
        let tokenInputs = get(atomTokenInputState);
        console.log("tokenInputs::", tokenInputs);
        let newIn = removeItemAtIndex(tokenInputs.inputToken, index);
        console.log("newIn::", newIn);
        set(
            atomTokenInputState, Object.assign({ inputToken: newIn })
        )
    }
});