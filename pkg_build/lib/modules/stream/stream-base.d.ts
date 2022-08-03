export declare type StreamGetCallback<ValueType = any> = (streamPayload: ValueType[]) => void;
export declare class StreamBase<FieldType = any, ValueType = any> {
    get(callback: StreamGetCallback<ValueType>, fields?: FieldType, method?: string): void;
}
