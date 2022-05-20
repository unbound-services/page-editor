// http stream group is a collection of different streams that are
// selected based on the arguments passed

// export interface HTTPStreamFields {
//   [key: string]: any;
//}
import { StreamBase, StreamGetCallback } from "../stream-base";

export type StreamSelectCallback<CallbackValueType> = (
  data: any,
  streams: { name: string; stream: StreamBase<CallbackValueType> }[]
) => string;

export type StreamFixture<CallbackValueType> = {
  stream: StreamBase<any, any>;
  callback?: (data: any) => CallbackValueType[];
  name: string;
};

export class StreamGroup<
  FieldType = any,
  CallbackValueType = any
> extends StreamBase<FieldType, CallbackValueType> {
  protected _streamSelect?: StreamSelectCallback<CallbackValueType> = null;
  protected _streams: {
    [streamName: string]: StreamFixture<CallbackValueType>;
  } = {};
  constructor(streamSelect: StreamSelectCallback<CallbackValueType> = null) {
    super();
    this._streamSelect = streamSelect;
  }

  public addStream(name, stream: StreamBase<any, CallbackValueType>) {
    this._streams[name] = { stream, name };
  }

  public adaptStream<InputType>(
    name: string,
    stream: StreamBase<any, InputType>,
    callback: (data: InputType[]) => CallbackValueType[]
  ) {
    this._streams[name] = { stream, name, callback };
  }

  public get(
    callback: StreamGetCallback<CallbackValueType>,
    fields?: FieldType
  ): void {
    let streamName: string = null;
    if (this._streamSelect) {
      streamName = this._streamSelect(
        fields,
        Object.values(this._streams).map((fixture) => ({
          name: fixture.name,
          stream: fixture.stream,
        }))
      );
    } else {
      // if theres no system then just select from the first one
      streamName = Object.values(this._streams)[0].name;
    }
    if (!streamName || !this._streams[streamName]) {
      throw new NoSubstreamInGroupException();
      return;
    }

    // if we got here we know its a real stream
    const streamFixture = this._streams[streamName];

    if (streamFixture.callback) {
      streamFixture.stream.get((data) => {
        callback(streamFixture.callback(data));
      });
      return;
    }
    // if we found a stream then use its callback
    streamFixture.stream.get(callback);
  }
}

export class NoSubstreamInGroupException extends Error {
  constructor(val = "") {
    super(
      `No sub-streams have been added to this group stream. Use addStream() before the editor starts ${val}`
    );
  }
}
