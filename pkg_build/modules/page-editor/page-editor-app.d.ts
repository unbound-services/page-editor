import { StreamDriver } from "../stream/stream-driver";
export default class PageEditorApp {
    protected _streamDriver: StreamDriver;
    get streamDriver(): StreamDriver<any>;
    protected components: any;
    protected plugins: any;
    constructor();
    initializeApp(domObject: any, onSave: (data: object) => boolean | void, pageData?: {
        children: any[];
    }, pageMeta?: {
        name: string;
        slug: string;
        status: string;
    }, newComponentList?: any, plugins?: {}, renderFlags?: {
        individualComponents: boolean;
    }): void;
    createStreamDriver(): StreamDriver;
    addComponents(components: any, compSlug?: boolean | any, compDisplayName?: boolean): void;
    getDefaultComponents(): {
        "column-with-text": {
            displayName: string;
            comp: (props: any) => import("preact").JSX.Element;
        };
        heading: {
            displayName: string;
            comp: (props: any) => import("preact").JSX.Element;
        };
        paragraph: {
            displayName: string;
            comp: (props: any) => import("preact").JSX.Element;
        };
        spacer: {
            displayName: string;
            comp: (props: any) => import("preact").JSX.Element;
        };
        streamSelect: {
            displayName: string;
            comp: ({ targetImage, setButtonRender, ...props }: {
                [x: string]: any;
                targetImage: any;
                setButtonRender: any;
            }) => import("preact").JSX.Element;
        };
    };
}
export { PageEditorApp };
