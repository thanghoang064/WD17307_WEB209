import { GetListStudentAction, IStudent } from "./action";


//định nghĩa state Student
export interface IStudentState {
    sinhviens : IStudent[]
}

const initStudentState : IStudentState = {
    sinhviens : []
}

const studentReducer = (state :IStudentState = initStudentState,action : GetListStudentAction ): IStudentState => {
    switch (action.type) {
        case 'get-sv' :
            state = {
                ...state,
                sinhviens:action.payload.sinhviens
            }
        break;
    }
    return state;
}
export default studentReducer;