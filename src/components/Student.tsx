import { useDispatch } from "react-redux";
import { useAddStudentMutation, useDeleteStudentMutation, useEditStudentMutation, useGetStudentListQuery } from "../store-tk/student/student.service";
import { IStudent } from "../store-tk/student/student.interface";


const Student = () => {
    const dispatch = useDispatch();
    
   const { isError,isLoading,data: studenList } =   useGetStudentListQuery(null);
   const [onAddStudent] = useAddStudentMutation();
   const [onEditStudent] = useEditStudentMutation();
   const [onDeleteStudent] = useDeleteStudentMutation();
   if(isLoading) {
    return <>Loading ....</>
   }

   if(isError) {
    return <p>Error</p>
   }
   return (
    <>
        <ul>
            {
                (studenList as IStudent[] || []).map(student =>{
                   return  <li key={student.id}>{student.name}
                    <button onClick={() => onEditStudent({id:student.id,name:"Nghĩa xấu try",birth:2007})}>sửa</button>
                    <button onClick={() => onDeleteStudent(student)}>xóa</button>
                   </li>
                })
            }
        </ul>
        <button onClick={() => onAddStudent({name:"Nghĩa",birth:2006})}>Add</button>
    </>
   )
}

export default Student;