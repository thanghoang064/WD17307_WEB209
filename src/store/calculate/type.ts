
import { SumAction } from "./action";

// khai báo các type chung 
export const SUM_COUNT = 'SUM_COUNT';
export const SUB_COUNT = 'SUB_COUNT';
//định nghĩa dispatchtype
 export type DispatchType = (args : SumAction) => SumAction