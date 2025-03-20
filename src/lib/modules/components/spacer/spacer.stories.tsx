import type { Meta, StoryObj } from '@storybook/react';

import { Spacer } from './spacer';
import React from 'react';
import { EditorContextFrame } from '../../content-editor/content-editor-editor-context';

const meta = {
  title: "Components/Spacer",
  component: Spacer,
        decorators:[
          (Story,{args})=> <EditorContextFrame componentList={{"compa":{displayName:"Component A", comp:(p)=><p>Lorem Ipsum</p>},"compb":{displayName:"Component B", comp:(p)=><strong>Lorem Ipsum</strong>}}} editing={args?.editing}><Story/></EditorContextFrame>
        ],
        args:{
          editing:true,
        },
        argTypes:{
          editing:{control:'boolean'},
        }
} satisfies Meta<typeof Spacer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};