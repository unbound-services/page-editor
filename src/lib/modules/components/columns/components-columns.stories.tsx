import type { Meta, StoryObj } from '@storybook/react';

import {ColumnSection, ColumnSectionProps} from './components-columns';
import { EditorContextFrame } from '../../content-editor/content-editor-editor-context';
import React from 'react';

const meta = {
  title: "Components/ColumnSection",
  component: ColumnSection,
    args:{
      editing:true,
      count:3,
      responsive:false,
    },
    argTypes:{
      editing:{control:'boolean'},
      count:{control:'number'},
    },
    decorators:[
      (Story,{args})=> <EditorContextFrame componentList={{"compa":{displayName:"Component A", comp:(p)=><p>Lorem Ipsum</p>},"compb":{displayName:"Component B", comp:(p)=><strong>Lorem Ipsum</strong>}}} editing={args?.editing}><Story/></EditorContextFrame>
    ]
} satisfies Meta<ColumnSectionProps & {editing:boolean}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};