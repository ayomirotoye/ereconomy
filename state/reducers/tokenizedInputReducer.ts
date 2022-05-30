
import { insertItemsStartingAt, removeItemAtIndex } from "../../utils/arrayUtils";
import { DELETE_TRANSACTION_PIN_DATA, APPEND_TRANSACTION_PIN_DATA, IS_TNX_PIN_PROVIDED, TNX_PIN_MODAL_STATE, CLEAR_TRANSACTION_PIN_DATA, NEXT_METHOD_AFTER_TNX_PIN } from "../actions/tokenActions";

const initialState = {
    tokenInputData: [],
    isTnxPinProvided: false,
    isTnxPinModalOpen: false,
    nextActionAfterTnxPin: null
}

export const appendTokenInputData = (data: any) => (dispatch: any) => {
    dispatch({ type: APPEND_TRANSACTION_PIN_DATA, payload: data });
}
export const deleteTokenInputData = (data: any) => (dispatch: any) => {
    dispatch({ type: DELETE_TRANSACTION_PIN_DATA, payload: data });
}
export const clearTokenInputData = () => (dispatch: any) => {
    dispatch({ type: CLEAR_TRANSACTION_PIN_DATA, payload: [] });
}
export const setTnxPinProvided = (data: any) => (dispatch: any) => {
    dispatch({ type: IS_TNX_PIN_PROVIDED, payload: data });
}
export const toggleTnxPinModalState = (data: any) => (dispatch: any) => {
    dispatch({ type: TNX_PIN_MODAL_STATE, payload: data });
};

export const setNextActionAfterTnxPin = (data: any) => (dispatch: any) => {
    dispatch({ type: NEXT_METHOD_AFTER_TNX_PIN, payload: data });
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case APPEND_TRANSACTION_PIN_DATA:
            return Object.assign({}, state, { tokenInputData: insertItemsStartingAt(state.tokenInputData, action.payload.index, action.payload.val) });
        case DELETE_TRANSACTION_PIN_DATA:
            let newArr = removeItemAtIndex([...state.tokenInputData], action.payload.index).filter(items => items != undefined);
            return Object.assign({}, state, { tokenInputData: newArr });
        case CLEAR_TRANSACTION_PIN_DATA:
            return Object.assign({}, state, { tokenInputData: [] });
        case TNX_PIN_MODAL_STATE:
            state = Object.assign({}, state, action.payload);
            return state;
        case NEXT_METHOD_AFTER_TNX_PIN:
            state = Object.assign({}, state, action.payload);
            return state;
        case IS_TNX_PIN_PROVIDED:
            state = Object.assign({}, state, action.payload);
            return state;
        default:
            return state;
    }
}

export default authReducer; 