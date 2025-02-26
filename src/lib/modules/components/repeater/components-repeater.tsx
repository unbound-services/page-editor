import React, { Fragment } from "react";
import { useEditorContext } from "../../input-slot/input-slot-hooks";
import SlotSection from "../../input-slot/slot-section/input-slot-slot-section";
import { NumberSelect } from "../../..";


export const Repeater = (props: React.PropsWithChildren<{ sectionName?: string, 
    count?:number,
    hideCounter?:boolean }>) => {
    const { sectionName="repeater",count=1, hideCounter = false, ...otherProps } = props;
    const TagName = "div";
    const { editorState: state, editing} = useEditorContext(sectionName);

    const childrenWithProps = (i,children) => React.Children.map(props.children, (child) => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { repeaterIndex: i,...state[`rep${i}`]} as any);
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
    if(editing && !hideCounter) numSelect = <NumberSelect {...otherProps} label="Count:" min={1} current={count} sectionName={"count"} />;
    return <>{numSelect}{children}</>;
}