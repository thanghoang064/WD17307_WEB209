import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchSinhVienAction, loadingStudent } from "../../../store/student/action";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import FormStudent from "./FormStudent";

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
    return (
        <>
        <FormStudent/>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Birth</td>
                </tr>
                {studentState.sinhviens.map((sv,index)=>{
                     return <tr key={index}>
                     <td>{sv.id}</td>
                     <td>{sv.name}</td>
                     <td>{sv.birth}</td>
                 </tr>   
                })}
                
            </table>
        </>
    );
}
export default ShowStudent;