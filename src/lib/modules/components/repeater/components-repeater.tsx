import React, { Fragment } from "react";
import { useEditorContext } from "../../input-slot/input-slot-hooks";
import SlotSection from "../../input-slot/slot-section/input-slot-slot-section";
import { NumberSelect } from "../../..";

export const Repeater = (props: React.PropsWithChildren<{ sectionName?: string,
  count?:number,
  TagName?:any,
  countStateName?:string,
  hideCounter?:boolean }>) => {
  const { sectionName="repeater", countStateName= "count" , hideCounter = false, ...otherProps } = props;

  const { editorState: state, editing} = useEditorContext(sectionName);
  const {count = (state && state[countStateName]) ? state[countStateName] : 1} = otherProps;

  const childrenWithProps = (i,children) => React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a
      // typescript error too.
      if (React.isValidElement(child)) {
        let currentState = state ? state[`rep${i}`] || {} : {};
        return React.cloneElement(child, { repeaterIndex: i,...currentState} as any);
      }
      return child;
    });

  // render the children count times, changing the values each time
  let children = [];
  for (let i = 0; i < count; i++) {
      let child = childrenWithProps(i,props.children);

      children.push(<SlotSection sectionName={`rep${i}`} key={i}>{child}</SlotSection>);
  }

  let numSelect=null;
  if(editing && !hideCounter) numSelect = <NumberSelect label="Count:" min={1}  sectionName={countStateName} />;
  if(props.TagName) return <props.TagName {...otherProps}>{numSelect}{children}</props.TagName>;
  return <>{numSelect}{children}</>;
}