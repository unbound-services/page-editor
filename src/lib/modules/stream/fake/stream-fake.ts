import { StreamBase } from "../stream-base";

export class FakeStream extends StreamBase {
  protected getValues: (props?: any) => any;

  constructor(getValues: (props?: any) => any) {
    super();
    this.getValues = getValues;
  }

  public get(callback, fields?): void {
    callback(this.getValues(fields));
  }
}
