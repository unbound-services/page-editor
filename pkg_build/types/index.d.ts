import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { FunctionComponent } from 'react';
import { JSX as JSX_2 } from 'react';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { SetStateAction } from 'react';

export declare const CE: CEType;

declare type CEBemContext = {
    bem?: boolean;
    bemPrefix?: string;
};

declare type CEType = {
    [Property in editableTagList]: typeof ContentEditableInputSlot;
} & {
    context: default_2.Context<CEBemContext>;
    __compCache: {
        [key: string]: typeof ContentEditableInputSlot;
    };
    BEM: default_2.Provider<CEBemContext>;
};

export declare const CheckboxInput: (props: {
    sectionName: string;
    current?: boolean;
    label: string;
    hidden?: boolean;
    tagName?: any;
}) => React_2.JSX.Element;

export declare const ColumnSection: (props: ColumnSectionProps) => React_2.JSX.Element;

declare type ColumnSectionProps = {
    count?: number;
    responsive?: boolean;
    setButtonRender?: (render: () => React_2.ReactNode) => void;
};

export declare const componentList: ComponentListType;

export declare type ComponentListType = {
    [componentKey: string]: {
        displayName: string;
        comp: PageEditorComponentType;
        shortDescription?: string;
        fullDescription?: string;
        previewProps?: {
            [key: string]: any;
        };
    };
};

export declare const ContentEditableInputSlot: ({ placeholder, ref, className, sectionName: sectionNameProp, tagName, textOnly, bem, bemName, editing: editingProp, bemPrefix, classFunction, children, ...props }: {
    [x: string]: any;
    placeholder?: string;
    ref?: any;
    className?: string;
    sectionName?: any;
    tagName?: string;
    textOnly?: boolean;
    bem?: boolean;
    bemName?: string;
    editing?: any;
    bemPrefix?: string;
    classFunction?: any;
    children?: any;
}) => JSX_2.Element;

export declare const ContentSection: (props: ContentSectionProps) => React_2.JSX.Element;

declare type ContentSectionProps = React_2.HTMLProps<HTMLButtonElement> & React_2.HTMLAttributes<HTMLButtonElement> & {
    sectionName?: string;
    tagName?: string;
    isRoot?: boolean;
    previewing?: boolean;
    editing?: boolean;
    editorOnly?: boolean;
    iframeRef?: React_2.MutableRefObject<HTMLIFrameElement>;
};

export declare const createContentEditable: ({ bem, bemPrefix, classFunction }: {
    bem?: boolean;
    bemPrefix?: string;
    bemName?: string;
    classFunction?: (tagName: string, props: any) => string;
}) => CEType;

declare type editableTagList = keyof tagTypeMap;

export declare const EditorContext: default_2.Context<EditorContextType>;

export declare type EditorContextType = {
    setState: (newState: any, sectionName?: any) => void;
    editorState: any;
    componentList: any;
    plugins?: any;
    editing: boolean;
    previewing: boolean;
    streams?: StreamContextType;
    renderFlags?: PageEditorRenderFlags;
    contextualPageData?: any;
    editorOptions: PageEditorAppOptions;
    viewportDimensions: {
        width: number;
        height: number;
        zoom: number;
    };
    updateViewportDimension: (key: string, val: number, add?: boolean) => void;
};

export declare const EditorValue: (props: React_2.PropsWithChildren<{
    sectionName?: string;
    defaultValue?: string;
    transform?: TransformFunctionType;
}>) => React_2.JSX.Element;

export declare class FakeStream extends StreamBase {
    protected getValues: (props?: any) => any;
    constructor(getValues: (props?: any) => any);
    get(callback: any, fields?: any): void;
}

export declare const HideIf: (props: default_2.PropsWithChildren<{
    hide?: boolean;
}>) => default_2.JSX.Element;

export declare const HideIfEditing: (props: default_2.PropsWithChildren<{
    editing?: boolean;
}>) => default_2.JSX.Element;

export declare const HideIfRendering: (props: default_2.PropsWithChildren<{
    editing?: boolean;
}>) => default_2.JSX.Element;

export declare class HTTPStream<FieldType extends HTTPStreamFields, CallbackValueType, APIReturnType = any> extends StreamBase<FieldType, CallbackValueType> {
    protected url: string;
    protected _callback: (data: any) => CallbackValueType[];
    constructor(url: string, callback?: (data: APIReturnType) => CallbackValueType[]);
    get(callback: StreamGetCallback<CallbackValueType>, fields?: HTTPStreamFields, method?: string): void;
    getAPIUrl(fields: HTTPStreamFields): string;
}

export declare interface HTTPStreamFields {
    [key: string]: any;
}

declare type IndividualStreamPreview<StreamType = any> = FunctionComponent<{
    model: StreamType;
    select: (streamItem: StreamType[]) => void;
}>;

/**
 * @description injectEditorContext creates a higher-order component - it is simply another way to inject the context
 * // this was originally a workaround, but someone may find it useful
 * @param Component the component that needs to be wrapped with an editor context consumer
 * @returns
 */
export declare const injectEditorContext: (Component: (props: useEditorContextOutputProps) => any) => (props: any) => React_2.JSX.Element;

/**
 * @description injectEditorState is a higher-order function that injects the editor state into a component
 * @param Comp the component that you would like to inject the editor state into
 * @returns a component which will have the editor state injected from the context through the props
 **/
export declare const injectEditorState: (Comp: React_2.ComponentType) => (props: any) => React_2.JSX.Element;

export declare type InsertButton = {
    buttonText: string;
    makeModal: (insertCallback: InsertCallback) => ReactNode;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export declare type InsertCallback = (e: any, contentToInsert: string) => void;

export declare const NumberSelect: (props: any) => default_2.JSX.Element;

export declare const PageEditor: (props: PageEditorPropType) => default_2.JSX.Element;

declare class PageEditorApp {
    protected _streamDriver: StreamDrawerDriver;
    protected _setForceRefreshVal: Function;
    protected _externalSetState: Function;
    protected _externalGetState: Function;
    protected _externalGetMarkup: Function;
    get streamDriver(): StreamDrawerDriver;
    protected _renderFunction: any;
    protected currentRoot: any;
    protected components: any;
    protected plugins: any;
    protected _editorOptions: PageEditorAppOptions;
    constructor(options?: PageEditorAppOptions);
    protected processOptions(options: PageEditorAppOptions): void;
    start(domObject: any, options?: PageEditorAppOptions): void;
    createStreamDriver(): StreamDrawerDriver;
    addComponents(components: PageEditorComponentType | PageEditorComponentType[], compSlug?: string, compDisplayName?: string): void;
    insertComponent(componentSlug: string, props?: {}): any;
    getDefaultComponents(): ComponentListType;
    refreshComponentListInEditor(): void;
    getEditorState(): any;
    /**
     *
     * @returns the markup for the page
     */
    getMarkup(): any;
    /**
     *
     * @returns the markup for the page
     */
    getIndividualMarkup(): string;
}
export { PageEditorApp as UNBEditor }
export default PageEditorApp;

declare type PageEditorAppOptions = {
    plugins?: PageEditorPlugin[];
    components?: ComponentListType;
    pageOptions?: {
        pageHtml?: string;
        renderInIframe?: boolean;
        clearContainer?: boolean;
        wrapperComponent?: React_2.ComponentType<React_2.PropsWithChildren<any>>;
        includeWrapperInRender?: boolean;
        documentRoot?: string | HTMLElement | ((iframeDocument: HTMLIFrameElement) => HTMLElement);
        href?: string;
        js?: string[];
        css?: string[];
        stylesheets?: string[];
        scripts?: string[];
    };
    onSave?: (data: object) => boolean | void;
    pageData?: {
        children: any[];
    };
    pageMeta?: {
        name: "";
        slug: "";
        status: "draft";
    };
    renderFlags?: PageEditorRenderFlags;
    contextualPageData?: any;
};

declare type PageEditorComponentType = (props: any) => JSX.Element;

declare type PageEditorOnsaveFunction = (data: any) => void;

declare type PageEditorPlugin = {
    name: string;
    components: any[];
    onCreate: (editorState: PageEditorStateType) => any;
    onExit: (editorState: any) => any;
    onEditorInit: (editorState: any) => any;
    afterSaveMarkup: (finalMarkup: string) => string;
    afterSavePageState: (pageState: PageEditorStateType) => PageEditorStateType;
    onPreview: (editorState: any) => any;
    onEditModeChange: (editorState: any) => any;
    onComponentAdd: (editorState: any) => any;
    onComponentDelete: (editorState: any) => any;
    onComponentMove: (editorState: any) => any;
    onStreamAdd: (stream: StreamBase) => any;
    onStreamSave: (stream: StreamBase) => any;
    onStreamDelete: (stream: StreamBase) => any;
};

declare type PageEditorPropType = {
    componentList?: any;
    streams?: StreamDriver;
    plugins?: any;
    editing?: boolean;
    onSave?: PageEditorOnsaveFunction;
    pageData?: any;
    pageMeta?: any;
    renderFlags?: PageEditorRenderFlags;
    exportState?: (getState: Function, setState: Function, getMarkup: Function) => void;
    contextualPageData?: any;
    editorOptions?: PageEditorAppOptions;
    children?: any;
};

declare type PageEditorRenderFlags = {
    individualComponents?: boolean;
    noRearrange?: boolean;
    noAdd?: boolean;
    inlineOptionBar?: boolean;
    disableFullscreen?: boolean;
    disableRefresh?: boolean;
};

declare type PageEditorStateType = {
    editorState: any;
    pageMetaState: any;
    preview: any;
    changes: any;
    advancedOpen: boolean;
    pageEditorDrawerOpen: boolean;
};

export declare const Repeater: (props: RepeaterProps) => default_2.JSX.Element;

declare type RepeaterProps = default_2.PropsWithChildren<{
    sectionName?: string;
    count?: number;
    TagName?: any;
    editing?: boolean;
    addLabel?: string;
    hideCounter?: boolean;
    rowSectionName?: string;
    hideAddButton?: boolean;
}>;

export declare const SelectInput: (props: SelectInputProps) => React_2.JSX.Element;

declare interface SelectInputProps {
    sectionName: string;
    options: string[] | {
        [key: string]: string;
    };
    optionLabels?: string[];
    current?: string;
    label?: string;
    hidden?: boolean;
    tagName?: any;
    selectList?: boolean;
}

export declare const SlotSection: (props: any) => React_2.JSX.Element;

export declare const Spacer: (props: any) => React_2.JSX.Element;

declare type StreamAdapterComponent<StreamType = any> = FunctionComponent<{
    entries: StreamType[];
    select: (streamItem: StreamType[]) => void;
}>;

export declare class StreamBase<FieldType = any, ValueType = any> {
    get(callback: StreamGetCallback<ValueType>, fields?: FieldType, method?: string): void;
}

export declare interface StreamContextType {
    streamList: string[];
    getStream: (streamName: string, callback: StreamGetCallback, fields?: StreamDrawerDriverFieldType) => void;
}

export declare class StreamDrawerDriver extends StreamDriver<any, StreamDrawerStreamOptions> {
    protected setCurrentStream: any;
    protected currentCallback: any;
    protected _setCurrentStreamName: any;
    getStream(streamName: string, callback: StreamGetCallback<any>, fields?: StreamDrawerDriverFieldType, method?: string): boolean;
    addStream<StreamValueType = any>(streamName: string, stream: StreamBase<any, StreamValueType>, streamOptions?: StreamDrawerStreamOptions<StreamValueType>): void;
    addStreams(streamList: StreamList): void;
    setStreams(streamList: StreamList): void;
    protected createStreamComponent(): void;
}

declare interface StreamDrawerDriverFieldType {
    selectMax?: number;
}

declare interface StreamDrawerStreamOptions<StreamValueType = any> {
    streamAdapter?: StreamAdapterComponent<StreamValueType>;
    individualPreviewComponent?: IndividualStreamPreview<StreamValueType>;
    fields?: {
        [name: string]: any | string[] | {
            [label: string]: string;
        };
    };
}

export declare class StreamDriver<CallbackType = any, StreamOptionType = any> {
    protected streams: StreamList<StreamOptionType>;
    protected component: FunctionComponent;
    constructor();
    addStream(streamName: string, stream: StreamBase): void;
    addStreams(streamList: StreamList): void;
    setStreams(streamList: StreamList): void;
    /**
     * gets a list of all the stream names
     */
    get streamList(): string[];
    protected createStreamComponent(): void;
    getComponent(): FunctionComponent;
    /**
     *
     * @param streamName the name of the stream you want to read from
     * @param callback this function will receive the results of the selection
     * @param fields this where you can add options (stream dependent)
     * @returns
     */
    getStream(streamName: string, callback: StreamGetCallback<CallbackType>, fields?: any): boolean;
}

declare type StreamFixture<CallbackValueType> = {
    stream: StreamBase<any, any>;
    callback?: (data: any) => CallbackValueType[];
    name: string;
};

declare type StreamGetCallback<ValueType = any> = (streamPayload: ValueType[]) => void;

export declare class StreamGroup<FieldType = any, CallbackValueType = any> extends StreamBase<FieldType, CallbackValueType> {
    protected _streamSelect?: StreamSelectCallback<CallbackValueType>;
    protected _streams: {
        [streamName: string]: StreamFixture<CallbackValueType>;
    };
    constructor(streamSelect?: StreamSelectCallback<CallbackValueType>);
    addStream(name: any, stream: StreamBase<any, CallbackValueType>): void;
    adaptStream<InputType>(name: string, stream: StreamBase<any, InputType>, callback: (data: InputType[]) => CallbackValueType[]): void;
    get(callback: StreamGetCallback<CallbackValueType>, fields?: FieldType): void;
}

declare type StreamList<StreamOptionType = any> = {
    [streamName: string]: {
        name: string;
        stream: StreamBase;
        streamOptions?: StreamOptionType;
    };
};

export declare const StreamSelectButton: ({ streamName, sectionName, selectMax, label, }: {
    streamName: any;
    sectionName: any;
    selectMax?: number;
    label?: string;
}) => JSX_2.Element;

declare type StreamSelectCallback<CallbackValueType> = (data: any, streams: {
    name: string;
    stream: StreamBase<CallbackValueType>;
}[]) => string;

export declare const StringInput: (props: StringInputProps) => React_2.JSX.Element;

declare interface StringInputProps {
    value?: any;
    sectionName: string;
    label?: string;
    tagName?: string;
    hidden?: boolean;
    inputClass?: string;
    placeholder?: string;
    children?: any;
}

export declare const Tabs: (props: default_2.PropsWithChildren<{
    tabNames: string[];
    setButtonRender: any;
}>) => default_2.JSX.Element;

declare type tagTypeMap = {
    "div": JSX_2.IntrinsicElements["div"];
    "span": JSX_2.IntrinsicElements["span"];
    "em": JSX_2.IntrinsicElements["em"];
    "strong": JSX_2.IntrinsicElements["strong"];
    "li": JSX_2.IntrinsicElements["li"];
    "a": JSX_2.IntrinsicElements["a"];
    "p": JSX_2.IntrinsicElements["p"];
    "h1": JSX_2.IntrinsicElements["h1"];
    "h2": JSX_2.IntrinsicElements["h2"];
    "h3": JSX_2.IntrinsicElements["h3"];
    "h4": JSX_2.IntrinsicElements["h4"];
    "h5": JSX_2.IntrinsicElements["h5"];
    "h6": JSX_2.IntrinsicElements["h6"];
    "ul": JSX_2.IntrinsicElements["ul"];
    "ol": JSX_2.IntrinsicElements["ol"];
    "blockquote": JSX_2.IntrinsicElements["blockquote"];
    "pre": JSX_2.IntrinsicElements["pre"];
    "code": JSX_2.IntrinsicElements["code"];
    "figcaption": JSX_2.IntrinsicElements["figcaption"];
    "table": JSX_2.IntrinsicElements["table"];
    "td": JSX_2.IntrinsicElements["td"];
    "tr": JSX_2.IntrinsicElements["tr"];
    "tbody": JSX_2.IntrinsicElements["tbody"];
    "rawText": JSX_2.IntrinsicElements["div"];
    "del": JSX_2.IntrinsicElements["del"];
    "ins": JSX_2.IntrinsicElements["ins"];
    "details": JSX_2.IntrinsicElements["details"];
    "summary": JSX_2.IntrinsicElements["summary"];
    "math": JSX_2.IntrinsicElements["span"];
    "text": JSX_2.IntrinsicElements["text"];
};

declare type TransformFunctionType<ValueType = any> = (value: ValueType) => ValueType;

/**
 *
 * @param sectionName the name for the section of state that this component is in charge of
 * // if you pass in a section name, the setState you receive will only accept one value; otherwise it will be the state for the whole component
 * @returns
 */
export declare const useEditorContext: (sectionName?: string, returnObjectIfOutsideContext?: boolean) => EditorContextType;

declare interface useEditorContextOutputProps {
    editorContext: EditorContextType;
    [x: string]: any;
}

/**
 * @description useEditorState is a hook that returns the editor state
 * @param sectionName the name for the section of state that this component is in charge of
 * @returns
 */
export declare const useEditorState: (sectionName?: string) => any[];

export declare const useEditorStateWithProps: (sectionName: string, props: any) => any;

export declare const useModal: () => {
    modalOpen: boolean;
    setModalOpen: default_2.Dispatch<default_2.SetStateAction<boolean>>;
    ModalOuterComponent: ({ children, modalOpen, setModalOpen }: {
        modalOpen: boolean;
        setModalOpen: (open: boolean) => void;
    } & {
        children?: ReactNode | undefined;
    }) => default_2.JSX.Element;
};

export { }
