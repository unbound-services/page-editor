import React from "react";

export type StreamContextType = {
  streamList: string[];
  getStream: (
    streamName: string,
    fields: any,
    callback: StreamContextGetStreamCallbackType
  ) => void;
};

export type StreamContextGetStreamCallbackType = (streamPayload: any) => void;

export const StreamContext = React.createContext<StreamContextType>(null);
