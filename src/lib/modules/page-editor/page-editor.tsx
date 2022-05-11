import React from "react";
import renderToString from "preact-render-to-string";

import EditorContext, {
  stateDeeper,
} from "../content-editor/content-editor-editor-context";
import { ContentSection } from "../input-slot/content-section/input-slot-content-section";

// page editor prop types
export type PageEditorStateType = {
  editorState: any;
  preview: any;
  changes: any;
  advancedOpen: boolean;
  pageEditorDrawerOpen: boolean;
};

export type PageEditorOnsaveFunction = (data: any) => void;

export type PageEditorPropType = {
  componentList: any;
  onSave: PageEditorOnsaveFunction | boolean;
  pageData: any;
};

export class PageEditor extends React.Component<
  PageEditorPropType,
  PageEditorStateType
> {
  constructor(props) {
    super(props);

    const initialState: PageEditorStateType = {
      editorState: props.pageData,
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

    const baseSetState = (obj) => {
      this.setState({ ...obj, changes: true });
    };

    const saveData = () => {
      if (!this.props.onSave) {
        console.log("No onSave function connected to app");
        return;
      }

      console.log("demoState", demoState);

      const pageMarkup = renderToString(
        <EditorContext.Provider
          value={{
            setState: stateDeeper("editorState", this.state, baseSetState),
            editorState: demoState,
            componentList: this.props.componentList,
            editing: false,
            previewing: true,
          }}>
          <ContentSection isRoot />
        </EditorContext.Provider>
      );

      // submit the form
      const pageState = this.state.editorState;

      console.log("Page State in saveData function: ", pageState);

      const data = { pageState, pageMarkup };

      // if there's an onsave then call it
      if (this.props.onSave) {
        (this.props.onSave as PageEditorOnsaveFunction)(data);
      }
    };

    return (
      <div>
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
        </div>

        <EditorContext.Provider
          value={{
            setState: stateDeeper("editorState", this.state, baseSetState),
            editorState: demoState,
            componentList: this.props.componentList,
            editing: !preview,
            previewing: preview,
          }}>
          <ContentSection isRoot />
        </EditorContext.Provider>
      </div>
    );
  }
}
