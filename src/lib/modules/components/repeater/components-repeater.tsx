import React, { ReactNode, useCallback, useEffect, useReducer } from "react";
import { useEditorContext } from "../../input-slot/input-slot-hooks";
import SlotSection from "../../input-slot/slot-section/input-slot-slot-section";
import { NumberSelect } from "../../..";
import { optionMenuReducer } from "../../input-slot/content-section/option-menu-reducer";
import { v4 as uuidV4 } from "uuid"; 
import { UUID } from "crypto";

export type RepeaterProps = React.PropsWithChildren<{ sectionName?: string,
  count?:number,
  TagName?:any,
  editing?:boolean,
  addLabel?:string,
  hideCounter?:boolean,
  rowSectionName?:string,
  hideAddButton?:boolean,
  setButtonRender?: (content: any) => void;
}>

export const Repeater = (props: RepeaterProps) => {
  const {
    sectionName="repeater",
    rowSectionName="row",
    addLabel="Row",
    hideAddButton=false,
    editing:editingProp,
    hideCounter = false,
    setButtonRender,
    ...otherProps
  } = props;

  const  countStateName= "count";
  const editorContext = useEditorContext(sectionName);
  const { editorState: state} = (editorContext ? editorContext : { editorState: null }); 
  const editing = (editingProp !== undefined) ? editingProp : editorContext?.editing;
  const {count = (state && state[countStateName]) ? state[countStateName] : 1} = otherProps;

  const [optionMenuState, dispatchOptionmenu] = useReducer(optionMenuReducer, { menus: {} });
  const ineterceptSetButtonRender = (optionMenu: ReactNode, componentUUID: UUID) => {
    dispatchOptionmenu({
      type: "SET_OPTION_MENU",
      payload: {
        optionMenu,
        componentUUID,
      }
    })
  }

  useEffect(() => {
    const optionMenu = () => <>{Object.values(optionMenuState.menus).map(component => component())}</>;
    if (setButtonRender) setButtonRender(optionMenu);
  }, [optionMenuState]);

  useEffect(() => {
    dispatchOptionmenu({ type: "CLEAR_MENUS" })
  }, [sectionName]);

  const childrenWithProps = useCallback((i,children) => React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      let currentState = (state && state[rowSectionName] && state[rowSectionName][i]) ? state[rowSectionName][i] : {};
      return React.cloneElement(
        child, {
          repeaterIndex: i,
          ...currentState,
          setButtonRender: (optionMenu) => ineterceptSetButtonRender(optionMenu, uuidV4() as UUID)} as any
      );
    }
    return child;
  }), [sectionName]);

  // render the children count times, changing the values each time
  let children = [];
  for (let i = 0; i < count; i++) {
      let child = childrenWithProps(i,props.children);

      children.push(
        <SlotSection sectionName={`${sectionName}.${rowSectionName}[${i}]`} key={i}>
          {child}
        </SlotSection>
      );
  }

  let addButton = null;
  
  if (editing && !hideAddButton) {
    const handleAdd = () => {
      const newCount = count + 1;
      editorContext.setState({ ...state, [countStateName]: newCount });
    };

    const handleRemove = () => {
      const newCount = Math.max(count -1,1);
      editorContext.setState({ ...state, [countStateName]: newCount });
    }

    addButton = <><button onClick={handleAdd}>+ {addLabel}</button>
    <button onClick={handleRemove}>- {addLabel}</button></>;
  }

  let numSelect=null;
  if(editing && !hideCounter) numSelect = (
    <NumberSelect
      label="Count:"
      min={1}
      sectionName={`${sectionName}.${countStateName}`}
    />
  );

  if(props.TagName) return <props.TagName {...otherProps}>{numSelect}{children}</props.TagName>;
  return <>{numSelect}{children}{addButton}</>;
}


