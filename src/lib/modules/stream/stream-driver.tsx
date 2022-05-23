import { FunctionComponent } from "preact";
import { StreamBase, StreamGetCallback } from "./stream-base";

export type StreamList = { [streamName: string]: StreamBase };

export class StreamDriver<CallbackType = any> {
  protected streams: StreamList = {};
  protected component: FunctionComponent;

  constructor() {
    this.createStreamComponent();
  }

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
      this.streams[streamName].get(callback, fields);
    }
    return false;
  }
}
