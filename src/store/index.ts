import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";

//định nghĩa 1 cái rootstate chung 
export interface IRootState {
    counter : ICounterState
}
const rootReducer = combineReducers({
    counter:counterReducer
})

// tạo ra store 
export const store = createStore(rootReducer,applyMiddleware(thunk));