import { Meta, StoryObj } from "@storybook/react";
import { Repeater, RepeaterProps } from "./components-repeater";
import React from "react";
import { PageEditor } from "../../page-editor/page-editor";
import EditorContext, { EditorContextFrame } from "../../content-editor/content-editor-editor-context";
import { CE } from "../../input-slot/content-editable/input-slot-content-editable";
import EditorValue from "../../input-slot/editor-value/input-slot-editor-value";
import { useEditorContext } from "../../..";

const editorStateDecorator=(Story,{args})=> {
  const {editorState} = useEditorContext();
return (<><pre style={{padding:8,background:"#ddffdd", fontWeight:"bold", color:"#336633"}}><h3 style={{textTransform:"uppercase"}}>Editor State</h3>{JSON.stringify(editorState,null,5)}</pre><Story/></>);
};

export default {
  title: "Components/Repeater",
  args:{
    editing:true,
  },
  argTypes:{
    editing:{control:'boolean'},
  },
  decorators:[
            editorStateDecorator,
    (Story,{args})=> <EditorContextFrame editing={args?.editing}><Story/></EditorContextFrame>
  ]

} satisfies Meta<RepeaterProps>;

export const Default: StoryObj<RepeaterProps> = {

  render: (args)=>{
    return <Repeater hideAddButton={args.hideAddButton} addLabel={args.addLabel} hideCounter={args.hideCounter}><div><h1>This is a h1 </h1><p>Repeater Child</p></div></Repeater>
    
  },
  args:{

  addLabel:"Add Row",
  hideAddButton:false,
  hideCounter:false,
},
argTypes:{

  hideCounter:{control:'boolean'},
  hideAddButton:{control:'boolean'},
  addLabel:{control:'text'},
},
};


export const Dual_Repeaters: StoryObj<RepeaterProps> = {
  
  render: (args)=>{
    return <main><Repeater sectionName="pair">
      <span style={{border:"2px #00aaff solid", background:"#dddddd",padding:4,margin:4, display:"inline-block"}}><strong><EditorValue defaultValue={"title"} sectionName="title" /></strong></span>
    </Repeater>
      <Repeater sectionName="pair">
        <div style={{background:"#dddddd",padding:8,margin:8}}><CE.h1 sectionName="title" /><p>Lorem Ipsum Amat Set Dolor</p></div>
      </Repeater>
      <Repeater sectionName="footer">
        <div style={{display:"inline-block", background:"#dddddd",padding:8,margin:8}}><CE.h4 sectionName="title" /></div>
      </Repeater>
      </main>},


};
