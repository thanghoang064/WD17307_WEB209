import { type } from "os";
import { AddStudentAction, GetListStudentAction, IStudent, LoadingStudentAction } from "./action";


//định nghĩa state Student
export interface IStudentState {
    sinhviens : IStudent[],
    isDataLoaded :boolean,
    error: unknown
    
}

const initStudentState : IStudentState = {
    sinhviens : [],
    isDataLoaded : false,
    error : null
}
type ICombinedAction = GetListStudentAction | LoadingStudentAction | AddStudentAction;
const studentReducer = (state :IStudentState = initStudentState,action : ICombinedAction ): IStudentState => {
    switch (action.type) {
        case 'get-sv' :
            state = {
                ...state,
                sinhviens:action.payload.sinhviens
            }
        break;
        case 'add-sv' :
            state = {
                ...state,
                sinhviens: state.sinhviens.concat(action.payload)
            }
        break;
        case "loading-sv": 
            state = {
                ...state,
                isDataLoaded : action.payload
            }
        break;
    }
    return state;
}
export default studentReducer;