import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchSinhVienAction } from "../../../store/student/action";
import { useSelector } from "react-redux";
import { IRootState } from "../../../store";

const ShowStudent = () => {
    const dispatch : Dispatch<any> = useDispatch();
    const studentState = useSelector(
        (state:IRootState) => state.sinhviens
    );
    useEffect(()=>{
        dispatch(fetchSinhVienAction());
    },[dispatch])
    return (
        <>
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