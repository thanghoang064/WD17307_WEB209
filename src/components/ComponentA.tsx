import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { increaseCountAction } from "../store/counter/action";

const ComponentA = () => {
    // định nghĩa dispatch 
    const dispatch : Dispatch<any> = useDispatch();
    const increase = () => {
       
        dispatch(increaseCountAction(1))
    }
    return (
        <>
            <button onClick={increase}>Tăng</button>
        </>
    )
}

export default ComponentA;