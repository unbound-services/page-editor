import { StreamBase, StreamGetCallback } from "../stream-base";
export type StreamSelectCallback<CallbackValueType> = (data: any, streams: {
    name: string;
    stream: StreamBase<CallbackValueType>;
}[]) => string;
export type StreamFixture<CallbackValueType> = {
    stream: StreamBase<any, any>;
    callback?: (data: any) => CallbackValueType[];
    name: string;
};
export declare class StreamGroup<FieldType = any, CallbackValueType = any> extends StreamBase<FieldType, CallbackValueType> {
    protected _streamSelect?: StreamSelectCallback<CallbackValueType>;
    protected _streams: {
        [streamName: string]: StreamFixture<CallbackValueType>;
    };
    constructor(streamSelect?: StreamSelectCallback<CallbackValueType>);
    addStream(name: any, stream: StreamBase<any, CallbackValueType>): void;
    adaptStream<InputType>(name: string, stream: StreamBase<any, InputType>, callback: (data: InputType[]) => CallbackValueType[]): void;
    get(callback: StreamGetCallback<CallbackValueType>, fields?: FieldType): void;
}
export declare class NoSubstreamInGroupException extends Error {
    constructor(val?: string);
}
