import { GetListDispatchType } from "./type"

export interface IStudent {
    id : number,
    name :string,
    birth: number   
}

interface IGetListStudentPayLoad {
    sinhviens : IStudent[]
}
export type GetListStudentAction = {
    type: 'get-sv',
    payload : IGetListStudentPayLoad
}

//lấy sinh viên 
export const fetchSinhVienAction = () => {
    return async (dispatch : GetListDispatchType) => {
        try {
            const response = await fetch('http://localhost:3001/students');
            // định nghĩa data nhận về từ API 
            const data : IStudent[] = await response.json();
            dispatch({
                type : 'get-sv',
                payload : {
                    sinhviens : data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}