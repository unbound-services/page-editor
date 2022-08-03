import { StreamBase, StreamGetCallback } from "../stream-base";

export interface HTTPStreamFields {
  [key: string]: any;
}

export class HTTPStream<
  FieldType extends HTTPStreamFields,
  CallbackValueType,
  APIReturnType = any
> extends StreamBase<FieldType, CallbackValueType> {
  protected url: string;
  protected _callback: (data: any) => CallbackValueType[];

  constructor(
    url: string,
    callback: (data: APIReturnType) => CallbackValueType[] = null
  ) {
    super();
    this.url = url;
    this._callback = callback;
  }

  public get(
    callback: StreamGetCallback<CallbackValueType>,
    fields?: HTTPStreamFields,
    method?: string
  ): void {
    const apiMethod = method || "GET";
    switch (apiMethod.toUpperCase()) {
      case "GET": {
        fetch(this.getAPIUrl(fields), { method: "get" })
          .then((response) => response.json())
          .then((data) => {
            let processedData: CallbackValueType[] = data;
            if (this._callback) {
              processedData = this._callback(data);
            }
            callback(processedData);
          });
        break;
      }
      case "POST": {
        fetch(this.url, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(fields)
        })
          .then((response) => response.json())
          .then((data) => {
            let processedData: CallbackValueType[] = data;
            if (this._callback) {
              processedData = this._callback(data);
            }
            callback(processedData);
          });
        break;
      }
    }
  }

  getAPIUrl(fields: HTTPStreamFields): string {
    return this.url + "?" + new URLSearchParams(fields).toString();
  }
}
