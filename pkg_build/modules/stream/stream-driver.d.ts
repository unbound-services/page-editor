import { FunctionComponent } from "preact";
import { StreamBase, StreamGetCallback } from "./stream-base";
export declare type StreamList = {
    [streamName: string]: StreamBase;
};
export declare class StreamDriver<CallbackType = any> {
    protected streams: StreamList;
    protected component: FunctionComponent;
    constructor();
    addStream(streamName: string, stream: StreamBase): void;
    addStreams(streamList: StreamList): void;
    /**
     * gets a list of all the stream names
     */
    get streamList(): string[];
    protected createStreamComponent(): void;
    getComponent(): FunctionComponent;
    /**
     *
     * @param streamName the name of the stream you want to read from
     * @param callback this function will receive the results of the selection
     * @param fields this where you can add options (stream dependent)
     * @returns
     */
    getStream(streamName: string, callback: StreamGetCallback<CallbackType>, fields?: any): boolean;
}
