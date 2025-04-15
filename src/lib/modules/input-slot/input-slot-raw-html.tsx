import React, { useEffect } from "react";
import { useEditorContext } from "./input-slot-hooks";
import * as prettier from "prettier/standalone";
import * as prettierPluginJs from "prettier/plugins/babel";

export const RawHTMLComponent = (props:React.PropsWithChildren) => {
    const {editing, setState} = useEditorContext();
    const {html, script, css} = props as any;
    const [showScripts, setShowscripts] = React.useState(false);
    const [showStyles, setShowStyles] = React.useState(false);
    const [formattedCode, setFormattedCode] = React.useState(false);
    // execute the javascript
      useEffect(()=>{
        if(!editing){
        eval(script);
        }

      }, [editing])

    useEffect(()=>{
      (async () => {
        const formatted = await prettier.format("type Query { hello: String }", {
          parser: "graphql",
          plugins: [prettierPluginJs],
        });
      })();
    }, [script])
  
    if(editing){
      let textArea = <textarea style={{width:"100%", minHeight:200}} value={html} onInput={(e)=>{setState(e.currentTarget.value, 'html')}} />
      
      return <div>
          <strong>HTML:</strong>
          {textArea}
          <strong onClick={()=>setShowscripts(v=>!v)}>Scripts {showScripts ? '-' : '+'}</strong>:
          <textarea style={{width:"100%", minHeight:200, display:`${showScripts ? "block" : "none"}`}} value={script} onInput={(e)=>{setState(e.currentTarget.value, 'script')}} />
          <strong onClick={()=>setShowStyles(v=>!v)}>Styles {showStyles ? '-' : '+'}</strong>:
          <textarea style={{width:"100%", minHeight:200, display:`${showStyles ? "block" : "none"}`}} value={css} onInput={(e)=>{setState(e.currentTarget.value, 'css')}} />
      </div>
    }
  
    let styleTag = null;
    if(css){
      styleTag = <style>{css}</style>
    }
  
    return <><div dangerouslySetInnerHTML={{__html:html as string}}></div>{styleTag}</>
  }