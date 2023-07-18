import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";
import resultReducer, { IResultState } from "./calculate/reduce";

//định nghĩa 1 cái rootstate chung 
export interface IRootState {
    counter : ICounterState,
    result : IResultState
}
const rootReducer = combineReducers({
    counter:counterReducer,
    result : resultReducer,
})

// tạo ra store 
export const store = createStore(rootReducer,applyMiddleware(thunk));