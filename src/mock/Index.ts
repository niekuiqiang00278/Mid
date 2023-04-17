// @ts-ignore
import Mock from 'mockjs'
import t0 from "./test/T0";
import t1 from "./test/T1";
import t2 from "./test/T2";

export interface MockParams {
    url: string
    type: string
    data?: any
    params?: any
    response(option?: any): Record<string, unknown>
}

const mocks = [t0, t1, t2]
export const MockXHR = () => {
    let i: MockParams;
    for (i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || "get", i.response);
    }
}