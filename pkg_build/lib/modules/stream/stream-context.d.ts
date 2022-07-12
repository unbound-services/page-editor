import { StreamDrawerDriverFieldType } from "./drawer/stream-drawer-driver";
import { StreamGetCallback } from "./stream-base";
export interface StreamContextType {
    streamList: string[];
    getStream: (streamName: string, callback: StreamGetCallback, fields?: StreamDrawerDriverFieldType) => void;
}
