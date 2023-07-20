import { GetListStudentAction, LoadingStudentAction } from "./action";

export type GetListDispatchType = (args : GetListStudentAction) => GetListStudentAction;
export type LoadingDispatchType = (args : LoadingStudentAction) => LoadingStudentAction;