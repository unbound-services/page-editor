import React from "react";
import { StreamGetCallback } from "./stream-base";

export interface StreamContextType {
  streamList: string[];
  getStream: (
    streamName: string,
    callback: StreamGetCallback,
    fields?: any
  ) => void;
}

export const StreamContext = React.createContext<StreamContextType>(null);
