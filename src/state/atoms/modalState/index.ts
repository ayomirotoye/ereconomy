import { atom } from "recoil";

export const atomLoginModalState = atom({
    key: 'LoginModalState',
    default: {
        isOpen: false
    },
});