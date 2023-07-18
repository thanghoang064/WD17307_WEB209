import * as actionType from './type'
import { DispatchType } from './type'

interface ISumTwoNumberPayLoad {
    num1 : number,
    num2 : number
}
export type SumAction = {
    type:string,
    payload:ISumTwoNumberPayLoad
}
export function sumCountAction(num1:number,num2:number) {
    // console.log(count);
    const action : SumAction = {
        type : actionType.SUM_COUNT, // tôi muốn gửi kèm hành động là tăng
        payload : {num1,num2} // data của tôi
    }
    return (dispatch : DispatchType) => {
        dispatch(action);
    }
}



