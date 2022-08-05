import { FunctionComponent } from "preact/compat";
import { useState } from "preact/hooks";
import { Drawer } from "../../common/drawer/common-drawer";
import { StreamBase, StreamGetCallback } from "../stream-base";
import { StreamDriver, StreamList } from "../stream-driver";

export type StreamAdapterComponent<StreamType = any> = FunctionComponent<{
  entries: StreamType[];
  select: (streamItem: StreamType[]) => void;
}>;

export type IndividualStreamPreview<StreamType = any> = FunctionComponent<{
  model: StreamType;
  select: (streamItem: StreamType[]) => void;
}>;

export interface StreamDrawerDriverFieldType {
  selectMax?: number;
}
export interface StreamDrawerStreamOptions<StreamValueType = any> {
  streamAdapter?: StreamAdapterComponent<StreamValueType>;
  individualPreviewComponent?: IndividualStreamPreview<StreamValueType>;
  fields?: { [name: string]: any | string[] | { [label: string]: string } };
}

export class StreamDrawerDriver extends StreamDriver<
  any,
  StreamDrawerStreamOptions
> {
  protected setCurrentStream = null;
  protected currentCallback = null;
  protected _setCurrentStreamName = null;
  getStream(
    streamName: string,
    callback: StreamGetCallback<any>,
    fields?: StreamDrawerDriverFieldType,
    method?: string
  ): boolean {
    if (this.streams[streamName]) {
      // only pass along a subset of fields
      const { selectMax = 1, ...remainingFields } = fields ? fields : {};
      // open the drawer
      this._setCurrentStreamName(streamName);
      this.streams[streamName].stream.get((data) => {
        // open the drawer
        // let them chose something
        // then do the callback

        this.currentCallback = callback;
        this.setCurrentStream(data);

        // console.log("this.currentStream", this.currentStream.current);
        // const index = window.prompt("stream index? 0-" + (data.length - 1));
        // console.log("data", data[index]);
        // callback([data[index]]);
      }, remainingFields, method);
    }
    return false;
  }

  addStream<StreamValueType = any>(
    streamName: string,
    stream: StreamBase<any, StreamValueType>,
    streamOptions: StreamDrawerStreamOptions<StreamValueType> = undefined
  ) {
    this.streams[streamName] = { name: streamName, stream, streamOptions };
  }

  addStreams(streamList: StreamList): void {
    this.streams = { ...this.streams, ...streamList };
  }
  setStreams(streamList: StreamList): void {
    this.streams = streamList;
  }

  // it is important that this only be rendered once per component
  protected createStreamComponent(): void {
    this.component = () => {
      const [currentStream, setCurrentStream] = useState([]);
      const [currentStreamName, setCurrentStreamName] = useState<string>(null);
      this.setCurrentStream = setCurrentStream;
      this._setCurrentStreamName = setCurrentStreamName;

      let drawerContents = null;
      if (this.streams[currentStreamName]?.streamOptions?.streamAdapter) {
        const StreamAdapterComp =
          this.streams[currentStreamName].streamOptions.streamAdapter;
        drawerContents = (
          <StreamAdapterComp
            entries={currentStream}
            select={(streamItem) => {
              this._setCurrentStreamName(null);
              this.currentCallback(streamItem);
            }}
          />
        );
      } else if (
        this.streams[currentStreamName]?.streamOptions
          ?.individualPreviewComponent
      ) {
        const IndividualComp =
          this.streams[currentStreamName]?.streamOptions
            ?.individualPreviewComponent;
        drawerContents = currentStream.map((streamItem) => (
          <div>
            <IndividualComp
              model={streamItem}
              select={(selection) => {
                this._setCurrentStreamName(null);
                this.currentCallback(selection);
              }}
            />
          </div>
        ));
        //Adding this if condition avoids the error but there is probably still a state issue
      } else if (this.streams[currentStreamName]) {
        drawerContents = currentStream.map((streamItem) => (
          <div>
            <img
              style={{ width: 50 }}
              src={streamItem.src}
              onClick={() => {
                this._setCurrentStreamName(null);
                this.currentCallback([streamItem]);
              }}
            />
          </div>
        ));
      }

      return (
        <div>
          <Drawer
            open={!!currentStreamName}
            onClose={() => this._setCurrentStreamName(false)}>
            {drawerContents}
          </Drawer>
        </div>
      );
    };
  }
}

const OptionBar = ({ options }: { options: string[] }) => {
  const optionComps = options.map((option) => <li>{option}</li>);
  return <ul>{optionComps}</ul>;
};
