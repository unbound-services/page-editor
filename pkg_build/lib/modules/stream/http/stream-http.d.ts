import { StreamBase, StreamGetCallback } from "../stream-base";
export interface HTTPStreamFields {
    [key: string]: any;
}
export declare class HTTPStream<FieldType extends HTTPStreamFields, CallbackValueType, APIReturnType = any> extends StreamBase<FieldType, CallbackValueType> {
    protected url: string;
    protected _callback: (data: any) => CallbackValueType[];
    constructor(url: string, callback?: (data: APIReturnType) => CallbackValueType[]);
    get(callback: StreamGetCallback<CallbackValueType>, fields?: HTTPStreamFields, method?: string): void;
    getAPIUrl(fields: HTTPStreamFields): string;
}
