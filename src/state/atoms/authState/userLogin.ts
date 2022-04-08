import { atom } from "recoil";

export const atomLoginState = atom({
    key: 'LoginState',
    default: {
        username: "",
        "password": "",
        isLoggedIn:false
    },
});