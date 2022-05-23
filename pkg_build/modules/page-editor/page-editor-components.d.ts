declare const componentList: {
    "column-with-text": {
        displayName: string;
        comp: (props: any) => import("preact").JSX.Element;
    };
    pageheader: {
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
export default componentList;
