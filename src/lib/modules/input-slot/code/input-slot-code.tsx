import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-css-extras';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/inline-color/prism-inline-color';


import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "prismjs/plugins/inline-color/prism-inline-color.css"
import { useEditorContext } from '../input-slot-hooks';
import React from 'react';



export const CodeInputSlot = ({ language="text",onRender=undefined, sectionName=undefined, ...props})=>{
    const {editing, editorState:code,  setState} = useEditorContext(sectionName);
    
    if(!editing && onRender){
      return onRender(code);
    }

    return <div><header style={{ fontWeight: 'bold', fontSize: '0.7rem', background:"#eeeeff", color:"#2222aa",padding:4,
        paddingLeft:8,
        textTransform:"uppercase", 
        letterSpacing:1,
        borderTopLeftRadius:4,
        borderTopRightRadius:4 }}>{language}</header><Editor 
      value={code} 
      onValueChange={code => setState(code)} 
      highlight={code => Prism.highlight(code || '', Prism.languages[language], language)} 
      padding={10} 
      readOnly={!editing}
      style={{
        background: "white",
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }} 
      
    /></div>
  }
