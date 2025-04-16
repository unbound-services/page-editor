import React, { useEffect } from "react";
import { useEditorContext } from "./input-slot-hooks";
import { CodeInputSlot } from "./code/input-slot-code";

export const RawHTMLComponent = (props:React.PropsWithChildren<{sectionName?:string}>) => {
    const {editing, setState} = useEditorContext();
    const {html, script, css} = props as any;
    const [currentTab, setCurrentTab] = React.useState(0);
    let tabVal = [html,css,script]
    const tabNames = ["HTML", "CSS", "JS"];
    const tabs = [
    <CodeInputSlot language="html" sectionName="html" onRender={html=><div dangerouslySetInnerHTML={{__html:html as string}}></div>} />,
    <CodeInputSlot language="css" sectionName="css" onRender={css=><style>{css}</style>} />,
    <CodeInputSlot language="javascript" sectionName="script" onRender={code=><script>{code}</script>} />
    ];


    if(editing){

      return <div>
        <ul style={{display:"flex", listStyle:"none", padding:0, margin:0, background:"#dddddd", border:"2px #dddddd solid", borderBottom:"none",
          
        }}>
          {tabNames.map((name, index) => <li key={index} style={{padding:"4px 8px",
          cursor:'pointer',
            color:currentTab==index? 'black' : '#888888', 
            background:currentTab==index? 'white' : '#ffffffaa', 
            fontWeight: currentTab==index || tabVal[index] ? "bold" : (html ? "bold" : "normal")}} onClick={() => setCurrentTab(index)}>{name}{tabVal[index] ? "*" : ""}</li>)}
        </ul>
        <div style={{ padding: 10 }} key={currentTab}>
          {tabs[currentTab]}
        </div>
      </div>
    
    }

    return tabs
  }


  