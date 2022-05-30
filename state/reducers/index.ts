import { combineReducers } from "redux";
import authReducer from "./authReducer";
import fundingReducer from "./fundingReducer";
import tokenizedInputReducer from "./tokenizedInputReducer";

const appReducer = combineReducers({
  authReducer: authReducer,
  tokenizedInputReducer: tokenizedInputReducer,
  fundingReducer: fundingReducer
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
