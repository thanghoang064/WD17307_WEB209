import { type } from "os"
import { AddStudentDispatchType, GetListDispatchType, LoadingDispatchType } from "./type"

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
export type AddStudentAction = {
    type: 'add-sv',
    payload :IStudent
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
export function addStudent(sv :IStudent) {
    return async (dispatch : AddStudentDispatchType) => {
        try {
            const response = await fetch('http://localhost:3001/students',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(sv)
            });
            // định nghĩa data nhận về từ API 
            if(!response.ok) {
                console.log('Errror');
            }
             const data = await response.json();
            dispatch({
                type : 'add-sv',
                payload : data
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