import { TOGGLE_LOGIN_MODAL } from "../actions/authActions";

let initialState = {
    isLoginModalOpen: true,
    loginState: {
        isLoggedIn: false
    }
}

export const toggleLoginModal = (data: { isLoginModalOpen: boolean }) => (dispatch: any) => {
    dispatch({
        type: TOGGLE_LOGIN_MODAL,
        payload: data
    })
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_LOGIN_MODAL:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
export default authReducer;