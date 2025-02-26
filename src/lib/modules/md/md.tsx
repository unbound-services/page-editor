
import * as React from "react";
import { CE } from "../input-slot/content-editable/input-slot-content-editable";
import { useEditorContext } from "../input-slot/input-slot-hooks"
import NumberSelectInput from "../input-slot/number-select-input/input-slot-number-select-input";
import StringInput from "../input-slot/string-input/input-slot-string-input";


const CreateMDHeader = (hlevel:number)=>({text}) => {
    let tag = `h${hlevel}`;
    const {editing } = useEditorContext();
    const Tag = CE[tag];
    if(editing){
        return <Tag sectionName='text' />
    }
    return <>
    {'#'.repeat(hlevel)+` ${text}`}
    {"\n"}</>
}

export const MDH1 = CreateMDHeader(1);
export const MDH2 = CreateMDHeader(2);
export const MDH3 = CreateMDHeader(3);
export const MDH4 = CreateMDHeader(4);
export const MDH5 = CreateMDHeader(5);
export const MDH6 = CreateMDHeader(6);

export const MDBlockQuote = ({text}) => {
    const {editing } = useEditorContext();
    if(editing){
        return <CE.blockquote style={{borderLeft:"5px #cccccc solid",paddingLeft:10}} sectionName='text' />
    }
    let tokens = text ? text.replaceAll(/\n|\r/gi,"\n")
        // .replaceAll("<div><br></div>","\n")
        .replaceAll("</div><br><div>","\n")
        .replaceAll(/<br(?: \/)?>/gi,"\n")
        .replaceAll(/\n?<\/?[^\>\/]*\/?>\s*?\n?\s*<\/?.*?\/?>\n?/gi,"\n")
        .replaceAll(/(<\/?[^\>\/]*\/?>)/gi,"\n")
        .split(/[\n|\r]/) : [""];
    if(tokens.length>0 && (tokens[tokens.length-1].trim() == "" || tokens[tokens.length-1].trim()=="\n")){
        tokens.pop();
    }

    return <>&gt; {tokens.join("\n> ")+"\n"}</>
}

/**
 * Paragraph Component
 */
export const MDParagraph = ({ text }: { text: string }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <CE.p sectionName="text" />;
    }
    return <>\n{text}\n</>;
  };
  
  /**
   * Bold Text Component
   */
  export const MDBold = ({ text }: { text: string }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <CE.strong sectionName="text" />;
    }
    return <>{`**${text}**`}</>;
  };
  export const MDBlockMath = ({
    math,
  }: {
    math: string;
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      // If you have a dedicated math editor, use it here.
      return <CE.div sectionName="math" />;
    }
    return (
      <>
        {`$$\n${math}\n$$`}
      </>
    );
  };


  export const MDInlineMath = ({
    math,
  }: {
    math: string;
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      // Use an inline math editor if available.
      return <CE.span sectionName="math" />;
    }
    return <>{`$${math}$`}</>;
  };

  export const MDDetails = ({
    summary,
    children,
  }: {
    summary: string;
    children: string;
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      // Assuming you have editable components for details/summary.
      return (
        <CE.details sectionName="details">
          <CE.summary sectionName="summary" />
          <div>
            <CE.div sectionName="content" />
          </div>
        </CE.details>
      );
    }
    return (
      <details>
        <summary>{summary}</summary>
        {children}
      </details>
    );
  };
  
  /**
   * Italic Text Component
   */
  export const MDItalic = ({ text }: { text: string }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <CE.em sectionName="text" />;
    }
    return <>{`*${text}*`}</>;
  };
  
  /**
   * Strikethrough Text Component
   */
  export const MDStrikethrough = ({ text }: { text: string }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <CE.del sectionName="text" />;
    }
    return <>{`~~${text}~~`}</>;
  };
  
  /**
   * Inline Code Component
   */
  export const MDInlineCode = ({ text }: { text: string }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <CE.code sectionName="text" />;
    }
    return <>{`\`${text}\``}</>;
  };
  
  /**
   * Code Block Component
   */
  export const MDCodeBlock = ({
    text,
    language = ""
  }: {
    text: string;
    language?: string;
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      // Assuming you have a content-editable code block component.
      return <CE.pre sectionName="text" />;
    }
    return (
      <>
        {`\n\`\`\`${language}\n${text}\n\`\`\`\n`}
      </>
    );
  };
  
  /**
   * Link Component
   */
  export const MDLink = ({
    text,
    url
  }: {
    text: string;
    url: string;
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <CE.a sectionName="text" href={url} />;
    }
    return <>{`[${text}](${url})`}</>;
  };
  
  /**
   * Image Component
   */
  export const MDImage = ({
    alt,
    url
  }: {
    alt: string;
    url: string;
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      return <div style={{background:"#dddddd"}}><img src={url} alt={alt} /><br /><StringInput label="SRC" sectionName="url" /><StringInput label="Alt Text" sectionName="alt" /></div>;
    }
    return <>{`![${alt}](${url})`}</>;
  };
  
  /**
   * Horizontal Rule Component
   */
  export const MDHorizontalRule = () => {
    const { editing } = useEditorContext();
    if (editing) {
      return <hr />;
    }
    return <>{`\n---\n`}</>;
  };
  
  /**
   * Unordered List Component
   */
  export const MDUnorderedList = ({count=1, ...props}) => {
    const { editing } = useEditorContext();
    if (editing) {
        let liList=[];
        for(let i=0;i<count;i++){
            liList.push(<CE.li sectionName={`item-${i}`} />);
        }
      // Assuming you have a CE.ul and CE.li for list editing.
      return (
        <ul>
            <li style={{listStyle:"none"}}>Items:<NumberSelectInput current={count} sectionName="count" /></li>
            {liList}
          
        </ul>
      );
    }
    let liList="\n";
    for(let i=0;i<count;i++){
        liList+=`- ${props[`item-${i}`]}\n`;
    }
    return (
      <>
         {liList}
      </>
    );
  };
  
  /**
   * Ordered List Component
   */
  export const MDOrderedList = ({
    list
  }) => {
    const { editing } = useEditorContext();
    if (editing) {
      // Assuming you have a CE.ol and CE.li for list editing.
      return (
        <CE.ol sectionName="list">
            <li>List Item</li>
        </CE.ol>
      );
    }

    let listTokens = list.replaceAll(/<\/li>/gi,"").split(/<li>/gi);
    listTokens.shift();
    let listString ="";
    for(let i=0;i<listTokens.length;i++){
        listString+=`${i+1}. ${listTokens[i]}\n`;
    }
    return <>{"\n"}{listString}</>
    
  };
    