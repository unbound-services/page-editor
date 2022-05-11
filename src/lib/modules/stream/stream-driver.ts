import { StreamBase, StreamGetCallback } from "./stream-base";
import type { StreamContextType } from "./stream-context";

export type StreamList = { [streamName: string]: StreamBase };

export class StreamDriver<CallbackType = any> {
  protected streams: StreamList = {};
  addStream(streamName: string, stream: StreamBase) {
    this.streams[streamName] = stream;
  }

  addStreams(streamList: StreamList): void {
    this.streams = streamList;
  }

  /**
   * gets a list of all the stream names
   */
  get streamList(): string[] {
    return Object.keys(this.streams);
  }

  /**
   *
   * @param streamName the name of the stream you want to read from
   * @param callback this function will receive the results of the selection
   * @param fields this where you can add options (stream dependent)
   * @returns
   */
  getStream(
    streamName: string,
    callback: StreamGetCallback<CallbackType>,
    fields?: any
  ): boolean {
    if (this.streams[streamName]) {
      this.streams[streamName].get(callback, fields);
    }
    return false;
  }
}
