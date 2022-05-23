import * as React from "preact";
import renderToString from "preact-render-to-string";

import Drawer from "../common/drawer/common-drawer";
import { PageMeta } from "../page-meta/page-meta";

import EditorContext, {
  stateDeeper,
} from "../content-editor/content-editor-editor-context";
import { ContentSection } from "../input-slot/content-section/input-slot-content-section";
import { StreamContextType } from "../stream/stream-context";
import { StreamDrawer } from "../stream/drawer/stream-drawer";
import { StreamDriver } from "../stream/stream-driver";

// page editor prop types
export type PageEditorStateType = {
  editorState: any;
  pageMetaState: any;
  preview: any;
  changes: any;
  advancedOpen: boolean;
  pageEditorDrawerOpen: boolean;
};

export type PageEditorOnsaveFunction = (data: any) => void;

export type PageEditorPropType = {
  componentList: any;
  streams: StreamDriver;
  plugins: any;
  onSave: PageEditorOnsaveFunction | boolean;
  pageData: any;
  pageMeta: any;
  renderFlags: { individualComponents?: boolean };
};

export class PageEditor extends React.Component<
  PageEditorPropType,
  PageEditorStateType
> {
  constructor(props) {
    super(props);

    const initialState: PageEditorStateType = {
      editorState: props.pageData,
      pageMetaState: props.pageMeta,
      preview: false,
      changes: false,
      advancedOpen: false,
      pageEditorDrawerOpen: false,
    };

    let windowPageData = window["pageData"];
    if (windowPageData) initialState.editorState = windowPageData;

    // only assign to the state object once, and then treat it read only
    this.state = initialState;
  }

  componentDidMount() {
    // attach that to the window
    window.addEventListener("beforeunload", (e) => {
      if (this.state.changes) {
        var confirmationMessage =
          "It looks like you have been editing something. " +
          "If you leave before saving, your changes will be lost.";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE

        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
      }
    });
  }

  render() {
    console.log("state", this.state);
    const demoState = this.state.editorState;
    const { preview } = this.state;
    const streams = this.props.streams;

    const baseSetState = (obj) => {
      this.setState({ ...obj, changes: true });
    };

    const togglePageDrawer = () => {
      this.setState({ pageEditorDrawerOpen: !this.state.pageEditorDrawerOpen });
    };

    const updatePageMetaState = (key, value) => {
      this.setState({
        pageMetaState: {
          ...this.state.pageMetaState,
          [key]: value,
        },
      });
    };

    const saveData = () => {
      if (!this.props.onSave) {
        console.log("No onSave function connected to app");
        return;
      }

      console.log("demoState", demoState);

      let componentsMarkup = [];
      if (this.props.renderFlags.individualComponents) {
        componentsMarkup = demoState.children.map((data) => {
          const compData = this.props.componentList[data.comp];
          if (!compData) return "";
          const Comp = this.props.componentList[data.comp].comp;
          let currentProps = data.props;

          return {
            comp: data.comp,
            markup: renderToString(
              <Comp
                {...currentProps}
                editing={false}
                componentName={compData.displayName}
                previewing={true}
                setButtonRender={(val) => {}}>
                {data.children}
              </Comp>
            ),
          };
        });
      }

      const pageMarkup = renderToString(
        <EditorContext.Provider
          value={{
            setState: stateDeeper("editorState", this.state, baseSetState),
            editorState: demoState,
            componentList: this.props.componentList,
            plugins: this.props.plugins,
            editing: false,
            previewing: true,
            streams,
          }}>
          <ContentSection isRoot />
        </EditorContext.Provider>
      );

      // submit the form
      const pageState = this.state.editorState;
      const metaState = this.state.pageMetaState;

      console.log("Page State in saveData function: ", pageState);

      const data = { pageState, pageMarkup, metaState, componentsMarkup };

      // if there's an onsave then call it
      if (this.props.onSave) {
        (this.props.onSave as PageEditorOnsaveFunction)(data);
      }
    };

    // get the streamdriver component
    const StreamDriverComponent = streams.getComponent();
    console.log("streamDriverComponent", StreamDriverComponent);

    return (
      <div>
        <Drawer
          open={this.state.pageEditorDrawerOpen}
          onClose={togglePageDrawer}>
          <PageMeta
            pageMeta={this.state.pageMetaState}
            updatePageMetaState={updatePageMetaState}
          />
        </Drawer>
        <div className="page-editor__menu">
          <button
            className="page-editor__button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.setState({ preview: !preview });
            }}>
            {!preview ? "Preview" : "Edit"}
          </button>
          <button
            className="page-editor__button"
            onClick={saveData}
            data-testid="save-page-button">
            Save Changes {this.state.changes ? "*" : ""}{" "}
          </button>
          <button className="page-editor__button" onClick={togglePageDrawer}>
            More Page Options
          </button>
        </div>

        <EditorContext.Provider
          value={{
            setState: stateDeeper("editorState", this.state, baseSetState),
            editorState: demoState,
            componentList: this.props.componentList,
            plugins: this.props.plugins,
            editing: !preview,
            previewing: preview,
            streams: streams,
          }}>
          <ContentSection isRoot />
          <StreamDriverComponent />
        </EditorContext.Provider>
      </div>
    );
  }
}
