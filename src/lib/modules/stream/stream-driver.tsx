import { FunctionComponent, JSX } from "react"
import { Stream } from "stream";
import { StreamBase, StreamGetCallback } from "./stream-base";

export type StreamList<StreamOptionType = any> = {
  [streamName: string]: {
    name: string;
    stream: StreamBase;
    streamOptions?: StreamOptionType;
  };
};

export class StreamDriver<CallbackType = any, StreamOptionType = any> {
  protected streams: StreamList<StreamOptionType> = {};
  protected component: FunctionComponent;

  constructor() {
    this.createStreamComponent();
  }

  addStream(streamName: string, stream: StreamBase) {
    this.streams[streamName] = { name: streamName, stream };
  }

  addStreams(streamList: StreamList): void {
    this.streams = { ...this.streams, ...streamList };
  }
  setStreams(streamList: StreamList): void {
    this.streams = streamList;
  }

  /**
   * gets a list of all the stream names
   */
  get streamList(): string[] {
    return Object.keys(this.streams);
  }

  protected createStreamComponent(): void {
    this.component = (props) => {
      return <div>hello</div>;
    };
  }

  getComponent(): FunctionComponent {
    return this.component;
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
      this.streams[streamName].stream.get(callback, fields);
    }
    return false;
  }
}
