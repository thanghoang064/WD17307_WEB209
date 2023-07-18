import { SumAction } from "./action";
import * as actions from './type';

//tạo ra 1 khuôn state 
export interface IResultState {
    result : number
}

// khởi tạo state counter = 0  
const initCounterState : IResultState = {
    result : 0
}

const resultReducer = (state : IResultState = initCounterState,action:SumAction) : IResultState =>{
    switch(action.type) {
        case actions.SUM_COUNT :
            //xử lý logic tăng trong này
            state = {
                ...state,
                result: action.payload.num1 + action.payload.num2
            }
            break;
            
    }
    return state;
}
export default resultReducer;