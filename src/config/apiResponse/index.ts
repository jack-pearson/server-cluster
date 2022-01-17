/*
 * @Author: jack-pearson
 * @Date: 2021-12-13 17:13:45
 * @LastEditTime: 2021-12-29 14:47:26
 * @LastEditors: jack-pearson
 * @FilePath: /server-cluster/src/config/apiResponse/index.ts
 * @Description:
 */
import { IApiResponse } from 'src/types';

export class ApiResponse {
  response: IApiResponse = {
    code: 200,
    success: true,
    message: '请求成功',
    data: {},
  };
  success(success: boolean) {
    this.response.success = success;
    return this;
  }
  data(response) {
    this.response.data = response;
    return this;
  }
  msg(message: string) {
    this.response.message = message;
    return this;
  }
  code(code: number) {
    this.response.code = code;
    return this;
  }
  page(pageNumber: number, pageSize: number, total: number) {
    this.response.data.pageNumber = pageNumber;
    this.response.data.pageSize = pageSize;
    this.response.data.total = total;
    return this;
  }
  return() {
    return this.response;
  }
}
