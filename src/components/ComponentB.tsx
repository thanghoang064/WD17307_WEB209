import { useSelector } from "react-redux";
import { IRootState } from "../store";

const ComponentB = () =>{
    //lên store đẻ lấy counter về
    const counterState = useSelector(
       (state : IRootState) => state.counter
    )
    return (
        <>
            <h1>Giá trị tăng là {counterState.counter }</h1>
        </>
    )
}
export default ComponentB;