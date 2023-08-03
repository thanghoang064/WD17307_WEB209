import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IStudent, IStudentState } from './student.interface'



const initialState: IStudentState = {
  students: [],
}

export const studentSlice = createSlice({
  name: 'student',
  initialState:initialState,
  reducers: {
    loadStudentList: (state, action: PayloadAction<IStudent[]>) => {
        state.students = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {loadStudentList } = studentSlice.actions

export default studentSlice.reducer

