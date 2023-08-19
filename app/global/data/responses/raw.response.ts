import { BaseResponse } from "./base.response";

export interface SingleDTO<T> extends BaseResponse {
  data: T;
  id?: string;
}
