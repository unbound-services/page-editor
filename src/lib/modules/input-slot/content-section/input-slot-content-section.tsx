import { InputSlot } from "../input-slot";
import * as React from "preact";
import EditorContext, {
  incState,
} from "../../content-editor/content-editor-editor-context";
import "./input-slot-content-section.scss";
import { useState } from "preact/hooks";

export interface ContentSectionProps {
  sectionName?: string;
  tagName?: string;
  isRoot?: boolean;
}

export type ContentSectionState = {
  component: any;
};

export class ContentSection extends InputSlot<
  ContentSectionProps,
  ContentSectionState
> {
  constructor(props) {
    super(props);
    const { context } = this;
    this.state = { component: null };
  }

  editorRender() {
    const { props, state, context } = this;
    const {
      sectionName,
      tagName: TagName = "div",
      isRoot = false,
      ...otherProps
    } = props;

    const sortComponentList = (componentsToSort) => {
      return Object.keys(componentsToSort).sort((a, b) =>
        componentsToSort[a].displayName > componentsToSort[b].displayName
          ? 1
          : -1
      );
    };

    const sortedComponentList = sortComponentList(context.componentList);

    // grab the editor state from context
    const {
      editorState = { children: [] },
      editing,
      previewing,
      renderFlags,
    } = context;

    let componentData = editorState.children;
    let currentChildren = editorState.children ? editorState.children : [];
    let childs = null;
    const removeComponent = (key) => (e) => {
      let neweditorState = { ...editorState, children: [...currentChildren] };
      e.preventDefault();
      e.stopPropagation();

      // probably should find a better way to do this

      neweditorState.children.splice(key, 1);
      context.setState(neweditorState);
    };

    const moveUp = (key) => (e) => {
      let neweditorState = { ...editorState, children: [...currentChildren] };
      e.preventDefault();
      e.stopPropagation();

      const comp = currentChildren[key];
      if (key == 0) return;
      neweditorState.children[key] = neweditorState.children[key - 1];
      neweditorState.children[key - 1] = comp;

      // probably should find a better way to do this
      context.setState(neweditorState);
    };

    const moveDown = (key) => (e) => {
      let neweditorState = { ...editorState, children: [...currentChildren] };
      e.preventDefault();
      e.stopPropagation();

      const comp = currentChildren[key];
      if (key == currentChildren.length - 1) return;
      neweditorState.children[key] = neweditorState.children[key + 1];
      neweditorState.children[key + 1] = comp;

      // probably should find a better way to do this
      context.setState(neweditorState);
    };

    if (componentData) {
      const getComp = getComponentFromData(context);
      childs = componentData.map((item, key) => {
        let optionButtons = null;

        // manage option buttons for deleting and moving components
        if (editing && context.componentList[item.comp]) {
          const componentDisplayName = context.componentList[item.comp]
            .displayName
            ? context.componentList[item.comp].displayName
            : item.comp;
          optionButtons = [];

          // ===========================
          // up and down buttons =======
          // ===========================
          if (!renderFlags.noRearrange) {
            if (key > 0)
              optionButtons.push(
                <button key={`${item.comp}-up-button`} onClick={moveUp(key)}>
                  Move Up
                </button>
              );
            if (key < currentChildren.length - 1)
              optionButtons.push(
                <button
                  key={`${item.comp}-down-button`}
                  onClick={moveDown(key)}>
                  Move Down
                </button>
              );
          }

          // =========================
          // delete button
          // ==========================
          if (!renderFlags.noAdd) {
            optionButtons.push(
              <button
                className={"content-section-controls__delete-button"}
                key={`${item.comp}-delete-button`}
                onClick={removeComponent(key)}>
                X
              </button>
            );
          }
        }

        return (
          <React.Fragment key={key}>
            {getComp(item, key, optionButtons)}
          </React.Fragment>
        );
      });
    }

    const componentList = context.componentList;

    // method for adding a new component to the content section state
    const addComponent = (e, component = null) => {
      let neweditorState = { ...editorState, children: [...currentChildren] };
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      // probably should find a better way to do this
      let whichComponent = component;
      if (!whichComponent)
        whichComponent = state.component
          ? state.component
          : sortedComponentList[0];
      neweditorState.children.push({ comp: whichComponent, props: {} });
      context.setState(neweditorState);
    };

    // component for adding a new component
    let addButton = null;
    if (context.editing && !renderFlags.noAdd) {
      addButton = (
        <div className="add-component">
          <button
            className="add-component__button"
            onClick={addComponent}
            data-testid="add-component-button">
            {" "}
            + Add Component
          </button>
          <select
            className="add-component__component-list"
            onChange={(e) => {
              const newComponent = e.currentTarget.value;
              this.setState({ component: newComponent });

              addComponent(null, newComponent);
            }}
            data-testid="add-component-listbox">
            {sortedComponentList.map((index) => {
              const value = componentList[index];
              const displayName = value.displayName ? value.displayName : value;
              return (
                <option key={index} value={index}>
                  {" "}
                  {displayName}{" "}
                </option>
              );
            })}
          </select>
        </div>
      );
    }

    return (
      <TagName {...otherProps}>
        {childs}
        {addButton}
      </TagName>
    );
  }
}

// get the component from the data that represents it
export const getComponentFromData =
  (currentContext) => (data, key, optionButtons) => {
    const compData = currentContext.componentList[data.comp];
    const [buttonPortal, setButtonPortal] = useState();
    const [buttonRender, setButtonRender] = useState(() => () => null);
    if (!compData) return null;
    const Comp = currentContext.componentList[data.comp].comp;
    let currentProps = data.props;

    // const portal = createPortal()
    return (
      <EditorContext.Provider key={key} value={incState(currentContext, key)}>
        <ComponentSlotWrapper
          optionButtons={optionButtons}
          componentName={compData.displayName}
          editing={currentContext.editing}
          previewing={currentContext.previewing}
          buttonRender={buttonRender}>
          <Comp
            {...currentProps}
            editing={currentContext.editing}
            componentName={compData.displayName}
            previewing={currentContext.previewing}
            setButtonRender={(val) => setButtonRender(() => val)}>
            {data.children}
          </Comp>
        </ComponentSlotWrapper>
      </EditorContext.Provider>
    );
  };

const ComponentSlotWrapper = (props) => {
  // const [showingButtons, setShowingButtons] = useState(false);
  // onMouseOver={()=>setShowingButtons(true)}
  // onMouseOut={(e)=>{console.log('event', e.target); setShowingButtons(false)}}

  // dont do anything with this when they're just previewing
  const { editing, previewing, buttonRender } = props;
  if (!editing) {
    return props.children;
  }

  // render the buttons
  let extra = null;

  if (buttonRender && typeof buttonRender === "function") {
    extra = buttonRender();
    if (extra)
      extra = <div className="content-section-controls__buttons">{extra}</div>;
  }

  const buttonSection = (
    <div className="content-section-controls__inner">
      <strong className="content-section-controls__component-type">
        {props.componentName}
      </strong>
      {props.optionButtons}
      {extra}
    </div>
  );

  return (
    <div className="content-section-controls__wrapper">
      {buttonSection}
      {props.children}
    </div>
  );
};
