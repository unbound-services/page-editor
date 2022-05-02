import { StreamBase } from "./stream-base";
import type {
  StreamContextGetStreamCallbackType,
  StreamContextType,
} from "./stream-context";

export class StreamDriver {
  protected streams: { [key: string]: StreamBase } = {};
  addStream(streamName: string, stream: StreamBase) {
    this.streams[streamName] = stream;
  }

  getStreamList(): string[] {
    return Object.keys(this.streams);
  }

  getStream(
    streamName: string,
    callback: StreamContextGetStreamCallbackType,
    fields?: any
  ): boolean {
    if (this.streams[streamName]) {
      this.streams[streamName].get(callback, fields);
    }
    return false;
  }

  asContextValue(): StreamContextType {
    return { getStream: this.getStream, streamList: this.getStreamList() };
  }
}
