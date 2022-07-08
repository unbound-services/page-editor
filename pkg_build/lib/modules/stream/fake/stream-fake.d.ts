import { StreamBase } from "../stream-base";
export declare class FakeStream extends StreamBase {
    protected getValues: (props?: any) => any;
    constructor(getValues: (props?: any) => any);
    get(callback: any, fields?: any): void;
}
