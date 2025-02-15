import { FunctionComponent } from "react"

export type StreamGetCallback<ValueType = any> = (
  streamPayload: ValueType[]
) => void;

export class StreamBase<FieldType = any, ValueType = any> {
  // protected _fieldList = null;
  // public fieldList = {
  //   get() {
  //     return this._fieldList;
  //   },
  // };
  // constructor(fieldList?: FieldType) {
  //   if (fieldList) {
  //     this._fieldList = fieldList;
  //   }
  // }
  public get(
    callback: StreamGetCallback<ValueType>,
    fields?: FieldType,
    method?: string
  ): void {}
}
