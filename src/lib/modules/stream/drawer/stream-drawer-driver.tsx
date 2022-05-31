import { useState } from "preact/hooks";
import { Drawer } from "../../common/drawer/common-drawer";
import { StreamGetCallback } from "../stream-base";
import { StreamDriver } from "../stream-driver";

export class StreamDrawerDriver extends StreamDriver {
  protected setCurrentStream = null;
  protected currentCallback = null;
  protected _setCurrentStreamName = null;
  getStream(
    streamName: string,
    callback: StreamGetCallback<any>,
    fields?: any
  ): boolean {
    if (this.streams[streamName]) {
      // open the drawer
      this._setCurrentStreamName(streamName);
      this.streams[streamName].get((data) => {
        // open the drawer
        // let them chose something
        // then do the callback

        this.currentCallback = callback;
        this.setCurrentStream(data);

        // console.log("this.currentStream", this.currentStream.current);
        // const index = window.prompt("stream index? 0-" + (data.length - 1));
        // console.log("data", data[index]);
        // callback([data[index]]);
      }, fields);
    }
    return false;
  }

  // it is important that this only be rendered once per component
  protected createStreamComponent(): void {
    this.component = () => {
      const [currentStream, setCurrentStream] = useState([]);
      const [currentStreamName, setCurrentStreamName] = useState(false);
      this.setCurrentStream = setCurrentStream;
      this._setCurrentStreamName = setCurrentStreamName;
      const images = currentStream.map((streamItem) => (
        <div>
          <img
            style={{ width: 50 }}
            src={streamItem.src}
            onClick={() => {
              this._setCurrentStreamName(false);
              this.currentCallback([streamItem]);
            }}
          />
        </div>
      ));

      return (
        <div>
          <Drawer
            open={!!currentStreamName}
            onClose={() => this._setCurrentStreamName(false)}>
            {images}
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
