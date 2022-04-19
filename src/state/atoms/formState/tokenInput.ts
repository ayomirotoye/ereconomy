import { atom } from "recoil";

export const atomTokenInputState = atom({
    key: 'TokenInputState',
    default: {
        inputToken: ""
    },
});