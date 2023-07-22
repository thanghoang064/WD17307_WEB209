import { AddStudentAction, DeleteStudentAction, GetListStudentAction, LoadingStudentAction } from "./action";

export type GetListDispatchType = (args : GetListStudentAction) => GetListStudentAction;
export type LoadingDispatchType = (args : LoadingStudentAction) => LoadingStudentAction;
export type AddStudentDispatchType = (args : AddStudentAction) => AddStudentAction;
export type DeleteStudentDispatchType = (args : DeleteStudentAction) => DeleteStudentAction;