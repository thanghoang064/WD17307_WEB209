
import { CounterAction } from "./action";

// khai báo các type chung 
export const INCREASE_COUNT = 'INCREASE_COUNT';

//định nghĩa dispatchtype
export type DispatchType = (args : CounterAction) => CounterAction