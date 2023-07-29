import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
interface ICart {
    productName : string,
    quatity : number
}
const Cart = () => {
    const [showDetails,setShowDetails] = useState<boolean>(false);
    const orderState = useSelector((state: IRootState)=>state.orders);
    const studentState = useSelector((state: IRootState)=>state.sinhviens);
    const [carts,setCarts] = useState<ICart[]>([]);
    //goi ham handleLoadCartInfo khi orderState thay doi 
    useEffect(()=>{
        handleLoadCartInfo();
    },[orderState])
    useEffect(()=>{
        if(!showDetails) {
            setCarts([]);
        } else {
            handleLoadCartInfo();
        }
    },[showDetails])
    const handleLoadCartInfo = () => {
        const cartTemp: ICart[] = [];
        for(const order of orderState.orders) {
            const student = studentState.sinhviens.find(student => student.id == order.productID);
            if(student) {
                cartTemp.push({
                    productName : student.name,
                    quatity : order.quatity
                });
            }
        }
        setCarts(cartTemp);
    }

    const handleShowDetailsOrders = () => {
        setShowDetails((state)=> !state);
    }
    return (
        <>
            <h4>Your Order : {orderState.orders.length}</h4>
            <button onClick={handleShowDetailsOrders}>Show detail</button>
            { showDetails && <table>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>
                {
                    carts.map((cart,index)=>{
                      return (<tr key={index}>
                            <th>{cart.productName}</th>
                            <th>{cart.quatity}</th>
                        </tr>)
                    })
                    
                }
            </table>}
        </>
    )
}
export default Cart;