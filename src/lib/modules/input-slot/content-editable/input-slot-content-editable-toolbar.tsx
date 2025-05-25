import React, { PropsWithChildren } from "react";
import "./input-slot-content-editable-toolbar.scss";

interface IContentEditableToolbar {
  editing?: boolean,
}

export const ContentEditableToolbar = (props: PropsWithChildren<IContentEditableToolbar>) => {
  const { editing=false } = props;
  if (!editing) return <></>
  return <div className="content-editable-toolbar__wrapper">
    <div className="content-editable-toolbar">
      {props.children}
    </div>
  </div>
}
