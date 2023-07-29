import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";
import resultReducer, { IResultState } from "./calculate/reduce";
import studentReducer, { IStudentState } from "./student/reduce";
import orderReducer, { IOrderState } from "./order/reduce";

//định nghĩa 1 cái rootstate chung 
export interface IRootState {
    counter : ICounterState,
    result : IResultState,
    sinhviens : IStudentState,
    orders : IOrderState
}
const rootReducer = combineReducers({
    counter:counterReducer,
    result : resultReducer,
    sinhviens : studentReducer,
    orders : orderReducer
})

// tạo ra store 
export const store = createStore(rootReducer,applyMiddleware(thunk));