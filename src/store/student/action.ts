import { GetListDispatchType, LoadingDispatchType } from "./type"

export interface IStudent {
    id : number,
    name :string,
    birth: number   
}

interface IGetListStudentPayLoad {
    sinhviens : IStudent[],
    loading : boolean,
    error: unknown
}
export type GetListStudentAction = {
    type: 'get-sv',
    payload : IGetListStudentPayLoad
}
export type LoadingStudentAction = {
    type:'loading-sv',
    payload : boolean
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
                    sinhviens : data,
                    loading : false,
                    error : null
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const loadingStudent = (loading = false) => {
    return (dispatch : LoadingDispatchType) => {
        dispatch({
            type : 'loading-sv',
            payload :loading
        })
    }
}