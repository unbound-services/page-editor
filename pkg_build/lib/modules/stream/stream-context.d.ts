import { StreamGetCallback } from "./stream-base";
export interface StreamContextType {
    streamList: string[];
    getStream: (streamName: string, callback: StreamGetCallback, fields?: any) => void;
}
