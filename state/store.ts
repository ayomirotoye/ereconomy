import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, compose, Action, Middleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middleware = [thunk];




const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        middleware,
        // you can also type middlewares manually

      )
      // prepend and concat calls can be chained
      .concat([])
})

// const store = testDevTestRedux ? createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middleware),
//     //@ts-expect-error
//     window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// ) : createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middleware),
//   )
// );

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;
