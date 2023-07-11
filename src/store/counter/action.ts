import * as actionType from './type'
import { DispatchType } from './type'
export type CounterAction = {
    type:string,
    payload:number
}
export function increaseCountAction(count:number) {
    console.log(count);
    const action : CounterAction = {
        type : actionType.INCREASE_COUNT, // tôi muốn gửi kèm hành động là tăng
        payload : count // data của tôi
    }
    return (dispatch : DispatchType) => {
        dispatch(action);
    }
}