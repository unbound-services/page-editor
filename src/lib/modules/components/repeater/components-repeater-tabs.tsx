import React from "react";
import { Repeater } from "./components-repeater";
import { ContentSection } from "../../input-slot/content-section/input-slot-content-section";
import { CE, HideIfRendering } from "../../..";


export const Tabs = (props:React.PropsWithChildren<{tabNames:string[],setButtonRender:any, renderTab?: (tabIndex: number) => React.ReactNode}>) => {
    const {children,tabNames, renderTab} = props;
    const [currentTab, setCurrentTab] = React.useState(0);
    return <div className="tabs">
        <ul><Repeater hideCounter={true} addLabel="Tab" sectionName="tabs"><Tab setTab={setCurrentTab} currentTab={currentTab}/></Repeater></ul>
        
        <Repeater hideCounter={true} hideAddButton={true} sectionName="tabs">
        <TabBody currentTab={currentTab} renderTab={renderTab} />
        </Repeater>
    </div>
}

const Tab = ({repeaterIndex=0, currentTab, setTab}) => {
    const isSelected = repeaterIndex === currentTab;
    const style ={display:"inline-block", 
        color:"#666666",
        background:"#dddddd",
        position:"relative",
        top:5,
        zIndex:1,
        marginTop:5,
        padding:"4px 8px",border:"2px #dddddd solid",
        paddingBottom:2,
        marginRight:4,
        borderBottom:"none" };
    if(isSelected) {
        style["fontWeight"] = "bold";
        style.color="black";
        style.top=0;
        style.paddingBottom=4,
        style.marginTop = 0,
        style.background="white";
    }
    return <><HideIfRendering><input type="radio" checked={isSelected} onClick={e=>setTab(repeaterIndex)} /></HideIfRendering><CE.li style={style} onClick={e=>setTab(repeaterIndex)} sectionName="tabName" placeholder="Tab Name" /></>
}

const TabBody = ({repeaterIndex=0, currentTab, renderTab}) => {
    const style ={display:"block",zIndex:2,position:"relative", background:"white", padding:16};
    if(repeaterIndex !== currentTab) style.display = "none";
    return <div style={style as any}><HideIfRendering><strong>Tab {repeaterIndex+1}</strong></HideIfRendering>{renderTab ? renderTab(repeaterIndex) : <ContentSection />}</div>
}