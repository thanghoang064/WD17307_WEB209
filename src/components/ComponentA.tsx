import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { increaseCountAction } from "../store/counter/action";
import { sumCountAction } from "../store/calculate/action";

const ComponentA = () => {
    // định nghĩa dispatch 
    const dispatch : Dispatch<any> = useDispatch();
    const increase = () => {
       
        dispatch(increaseCountAction(1))
    }
    const sum = () => {
        dispatch(sumCountAction(1,2))
    }

    return (
        <>
            <button onClick={sum}>Cộng</button>
            <button onClick={increase}>Tăng</button>
        </>
    )
}

export default ComponentA;