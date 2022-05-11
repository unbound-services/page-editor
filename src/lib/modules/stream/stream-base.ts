export type StreamGetCallback<ValueType = any> = (
  streamPayload: ValueType[]
) => void;

export class StreamBase<FieldType = any, ValueType = any> {
  public get(
    callback: StreamGetCallback<ValueType>,
    fields?: FieldType
  ): void {}
}
