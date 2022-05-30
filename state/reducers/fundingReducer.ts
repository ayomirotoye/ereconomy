import { TOGGLE_CARD_FUNDING_MODAL } from "../actions/fundingActions";

let initialState = {
    isfundAccountModalOpen: false,
    loginState: {
        isLoggedIn: false
    }
}

export const toggleCardFundingModal = (data: { isfundAccountModalOpen: boolean }) => (dispatch: any) => {
    dispatch({
        type: TOGGLE_CARD_FUNDING_MODAL,
        payload: data
    })
}


const fundingReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_CARD_FUNDING_MODAL:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
export default fundingReducer;