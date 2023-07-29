import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IStudent, deleteStudent, fetchSinhVienAction, loadingStudent } from "../../../store/student/action";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import FormStudent from "./FormStudent";
import { CartAction } from "../../../store/order/action";

const ShowStudent = () => {
    const dispatch : Dispatch<any> = useDispatch();
    const studentState = useSelector(
        (state:IRootState) => state.sinhviens
    );
    useEffect(()=>{
        dispatch(loadingStudent(true));
        dispatch(fetchSinhVienAction());
    },[dispatch])
    if(!studentState.isDataLoaded) {
        return <div>Loading</div>
    }
    const handleDeleteSV = (sv : IStudent) => {
        dispatch(deleteStudent(sv));
    }
    const handleAddCart = (sv : IStudent) => {
        dispatch(CartAction(sv));
    }
    return (
        <>
        <FormStudent/>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Birth</td>
                    <td>Action</td>
                </tr>
                {studentState.sinhviens.map((sv,index)=>{
                     return <tr key={index}>
                     <td>{sv.id}</td>
                     <td>{sv.name}</td>
                     <td>{sv.birth}</td>
                     <td>
                        <button onClick={event => handleDeleteSV(sv)}> Xóa</button>
                        <button onClick={event => handleAddCart(sv)}> Add Cart</button>
                     </td>
                 </tr>   
                })}
                
            </table>
        </>
    );
}
export default ShowStudent;