import { StreamContextGetStreamCallbackType } from "./stream-context";

export class StreamBase<FieldType = any> {
  public get(
    callback: StreamContextGetStreamCallbackType,
    fields?: FieldType
  ) {}
}
