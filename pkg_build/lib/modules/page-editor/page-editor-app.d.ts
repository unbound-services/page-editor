import { render } from "preact";
import { PageEditorComponentType } from "./page-editor-components";
import { StreamDriver } from "../stream/stream-driver";
export declare type PageEditorRenderFlags = {
    individualComponents?: boolean;
    noRearrange?: boolean;
    noAdd?: boolean;
    inlineOptionBar?: boolean;
};
export declare const defaultRendererFlags: Readonly<PageEditorRenderFlags>;
export default class PageEditorApp {
    protected _streamDriver: StreamDriver;
    protected _setForceRefreshVal: Function;
    protected _externalSetState: Function;
    get streamDriver(): StreamDriver<any>;
    protected _renderFunction: typeof render;
    protected components: any;
    protected plugins: any;
    constructor();
    initializeApp(domObject: any, onSave?: (data: object) => boolean | void, pageData?: {
        children: any[];
    }, pageMeta?: {
        name: string;
        slug: string;
        status: string;
    }, newComponentList?: any, plugins?: {}, renderFlags?: PageEditorRenderFlags, contextualPageData?: any): void;
    createStreamDriver(): StreamDriver;
    addComponents(components: PageEditorComponentType | PageEditorComponentType[], compSlug?: string, compDisplayName?: string): void;
    insertComponent(componentSlug: string, props?: {}): any;
    getDefaultComponents(): import("./page-editor-components").ComponentListType;
    refreshComponentListInEditor(): void;
}
export { PageEditorApp };
