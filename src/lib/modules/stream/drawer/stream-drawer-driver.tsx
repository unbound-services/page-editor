import { StreamGetCallback } from "../stream-base";
import { StreamDriver } from "../stream-driver";

export class StreamDrawerDriver extends StreamDriver {
  getStream(
    streamName: string,
    callback: StreamGetCallback<any>,
    fields?: any
  ): boolean {
    if (this.streams[streamName]) {
      this.streams[streamName].get((data) => {
        // open the drawer
        // let them chose something
        // then do the callback
        const index = window.prompt("stream index? 0-" + (data.length - 1));
        console.log("data", data[index]);
        callback([data[index]]);
      }, fields);
    }
    return false;
  }
}
