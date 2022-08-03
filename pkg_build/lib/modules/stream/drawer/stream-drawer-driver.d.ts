import { FunctionComponent } from "preact/compat";
import { StreamBase, StreamGetCallback } from "../stream-base";
import { StreamDriver, StreamList } from "../stream-driver";
export declare type StreamAdapterComponent<StreamType = any> = FunctionComponent<{
    entries: StreamType[];
    select: (streamItem: StreamType[]) => void;
}>;
export declare type IndividualStreamPreview<StreamType = any> = FunctionComponent<{
    model: StreamType;
    select: (streamItem: StreamType[]) => void;
}>;
export interface StreamDrawerDriverFieldType {
    selectMax?: number;
}
export interface StreamDrawerStreamOptions<StreamValueType = any> {
    streamAdapter?: StreamAdapterComponent<StreamValueType>;
    individualPreviewComponent?: IndividualStreamPreview<StreamValueType>;
    fields?: {
        [name: string]: any | string[] | {
            [label: string]: string;
        };
    };
}
export declare class StreamDrawerDriver extends StreamDriver<any, StreamDrawerStreamOptions> {
    protected setCurrentStream: any;
    protected currentCallback: any;
    protected _setCurrentStreamName: any;
    getStream(streamName: string, callback: StreamGetCallback<any>, fields?: StreamDrawerDriverFieldType, method?: string): boolean;
    addStream<StreamValueType = any>(streamName: string, stream: StreamBase<any, StreamValueType>, streamOptions?: StreamDrawerStreamOptions<StreamValueType>): void;
    addStreams(streamList: StreamList): void;
    setStreams(streamList: StreamList): void;
    protected createStreamComponent(): void;
}
