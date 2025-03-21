import type { Meta, StoryObj } from '@storybook/react';

import { ContentEditableInputSlot } from './input-slot-content-editable';
import { EditorContextFrame } from '../../content-editor/content-editor-editor-context';
import React from 'react';
import { useEditorContext } from '../input-slot-hooks';

const meta = {
  title: "Components/ContentEditableInputSlot",
  component: ContentEditableInputSlot,
      decorators:[
        (Story,{args})=> {
          const {editorState} = useEditorContext();
        return (<div><code>{JSON.stringify(editorState)}</code><Story/></div>);
        },
        (Story,{args})=> <EditorContextFrame componentList={{"compa":{displayName:"Component A", comp:(p)=><p>Lorem Ipsum</p>},"compb":{displayName:"Component B", comp:(p)=><strong>Lorem Ipsum</strong>}}} editing={args?.editing}><Story/></EditorContextFrame>
      ],
  args:{
    editing:true,
  },
  argTypes:{
    editing:{control:'boolean'},
    tagName:{options:["div","p","h1","h2","h3","h4","h5","h6"],control:'select'},
  }
} satisfies Meta<typeof ContentEditableInputSlot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const BEM = {
  args:{
    editing:true,
    sectionName: "header",
    tagName: "h1",
    bem: true,
    bemName: "",
    bemPrefix: "bem-example"
  },
  argTypes:{
    editing:{control:'boolean'},
    tagName:{options:["div","p","h1","h2","h3","h4","h5","h6"],control:'select'},
  },
  render: (args,...other)=>{
    const css = `.bem-example__header
      {
        background:#ffaaaa
    }
        .bem-example__h1
      {
        background:#aaaaff
    }`
    return <div><style>{css}</style><code lang={"css"} >{css}</code><ContentEditableInputSlot {...args} /></div>
  }
};