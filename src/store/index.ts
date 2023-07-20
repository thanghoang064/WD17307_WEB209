import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";
import resultReducer, { IResultState } from "./calculate/reduce";
import studentReducer, { IStudentState } from "./student/reduce";

//định nghĩa 1 cái rootstate chung 
export interface IRootState {
    counter : ICounterState,
    result : IResultState,
    sinhviens : IStudentState
}
const rootReducer = combineReducers({
    counter:counterReducer,
    result : resultReducer,
    sinhviens : studentReducer
})

// tạo ra store 
export const store = createStore(rootReducer,applyMiddleware(thunk));