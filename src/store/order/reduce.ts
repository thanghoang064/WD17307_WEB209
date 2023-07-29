import { AddCartAction } from "./action"


export interface IOrder {
    productID : number,
    quatity : number
}

export interface IOrderState {
    orders : IOrder[]
}

const initOrderState : IOrderState = {
    orders : []
}

const orderReducer = (state : IOrderState = initOrderState,action: AddCartAction) : IOrderState => {
    switch (action.type) {
        case 'add-cart' :
            const orderExistIndex = state.orders.findIndex(order => order.productID === action.payload.id);
            if (orderExistIndex === -1) {
                state = {
                    ...state,
                    orders : [{
                        productID : action.payload.id,
                        quatity : 1
                    },...state.orders]
                }
            } else  {
                state.orders[orderExistIndex].quatity += 1
                state = {
                    ...state,
                    orders : state.orders
                }
            }
        break;
    }
    return state;
}

export default orderReducer;