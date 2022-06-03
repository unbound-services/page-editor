import { StreamGetCallback } from "../stream-base";
import { StreamDriver } from "../stream-driver";
export declare class StreamDrawerDriver extends StreamDriver {
    protected setCurrentStream: any;
    protected currentCallback: any;
    protected _setCurrentStreamName: any;
    getStream(streamName: string, callback: StreamGetCallback<any>, fields?: any): boolean;
    protected createStreamComponent(): void;
}
