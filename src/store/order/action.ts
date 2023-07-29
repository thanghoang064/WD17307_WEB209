import { IStudent } from "../student/action";
import { AddCartDispatchType } from "./type";

export interface AddCartAction {
    type : 'add-cart',
    payload : IStudent
}

export function CartAction(student : IStudent) {
    
    const action :AddCartAction = {
        type : 'add-cart',
        payload : student
    }
   
    return (dispatch : AddCartDispatchType) => {
        dispatch(action);
    }
}