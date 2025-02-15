import * as React from "react"
import NumberSelectInput from "../../input-slot/number-select-input/input-slot-number-select-input";
import { useEditorContext } from "../../input-slot/input-slot-hooks";
import "./spacer.scss";
import { CE } from "../../input-slot/content-editable/input-slot-content-editable";
const spacer = (props) => {
  const { space =10 } = props;
  const { editing,setState } = useEditorContext();
  const handleRef = React.useRef(null);
  const handleData = React.useRef({startY:0, startHeight:0, mouseDown:false});
  let handle = null;

  const handleMouseDown = (e) => {
    if(e.target !== handleRef.current) return;
    handleData.current.startY = e.clientY || e.touches[0].clientY;
    handleData.current.startHeight = space ? space : 0;
    if(!handleData.current.startHeight || handleData.current.startHeight<0) handleData.current.startHeight = 0;
    handleData.current.mouseDown = true;
  };
    const handleMouseMove = (e) => {
      if(!handleData.current.mouseDown) return;
      
      const currentY = e.clientY || e.touches[0].clientY;
      let diff = currentY - handleData.current.startY;
      const newHeight = Math.max(0,handleData.current.startHeight + diff);
      setState( {space:newHeight});
    };
    const handleMouseUp = (e) => {
      if(!handleData.current.mouseDown) return;
      const currentY = e.clientY || e.touches[0].clientY;
      let diff = currentY - handleData.current.startY;
      const newHeight = Math.max(0,handleData.current.startHeight + diff);
      setState( {space:newHeight});
      handleData.current.mouseDown = false;
    };

    const removeRefs = ()=>{
      if(handleRef.current){
        handleRef.current.removeEventListener("mousedown", handleMouseDown);
        handleRef.current.removeEventListener("touchstart", handleMouseDown);
        handleRef.current.removeEventListener("mousemove", handleMouseMove);
        handleRef.current.removeEventListener("touchmove", handleMouseMove);
        handleRef.current.removeEventListener("mouseup", handleMouseUp);
        handleRef.current.removeEventListener("touchend", handleMouseUp);
        handleRef.current.removeEventListener("mouseleave", handleMouseUp);
        handleRef.current.removeEventListener("touchcancel", handleMouseUp);
        handleRef.current.removeEventListener("touchleave", handleMouseUp);
    }
  }
  React.useEffect(()=>{
    return removeRefs;
  },[]);

  

  if(editing ) {


    // handle the mouse/touch drag events for the handle
    const onRef = (ref) => {
      if(ref==handleRef.current) return;
      removeRefs();
      if(ref){
        ref.addEventListener("mousedown", handleMouseDown);
        ref.addEventListener("touchstart", handleMouseDown);
        ref.addEventListener("mousemove", handleMouseMove);
        ref.addEventListener("touchmove", handleMouseMove);
        ref.addEventListener("mouseup", handleMouseUp);
        ref.addEventListener("touchend", handleMouseUp);
        ref.addEventListener("mouseleave", handleMouseUp);
        ref.addEventListener("touchcancel", handleMouseUp);
        ref.addEventListener("touchleave", handleMouseUp);
      }



      handleRef.current = ref;

    }

    handle = <div ref={onRef} style={{height:space}} className="spacer-handle">      
    <NumberSelectInput
    key="num-select"
    sectionName="space"
    className="spacer-input"
    current={space}
    max={1000}
    min={0}
  /></div>;
  }else{
     return <div style={{height: `${space}px`}}></div>;
  }

  

  return (
    <React.Fragment>

      <div style={{height: `${space}px`}}>{handle}</div>
      
    </React.Fragment>
  );
};

export default spacer;
