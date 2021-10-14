import React, { useContext } from 'react';
import EditorContext from '../../content-editor-editor-context';
import NumberSelectInput from '../../input-slot/number-select-input/content-editor-input-slot-number-select-input';
import "./content-editor-components-spacer.scss";


const SpacerComponent = (props) =>{

    const context = useContext(EditorContext)
    const { desktopHeight, mobileHeight = 40 } = props;
    
    const onChange = (amount) => (e) => {
        let newVal = mobileHeight + amount;
        if(newVal <0) newVal = 0;
        context.setState({mobileHeight: newVal});
    }

    if(context.editing) {
        return <div style={{height: `${mobileHeight}px`}}>
            <span className="content-editor-spacer__amount">
                <a className="content-editor-spacer__button" onClick={onChange(5)}> + </a> {`${mobileHeight} Pixel Spacer`}
                <a className="content-editor-spacer__button" onClick={onChange(-5)}> - </a></span></div>
    } else {
        return <div style={{height: mobileHeight}}></div>
    }
}

SpacerComponent.defaultValues = {
    mobileHeight:40
}


export default SpacerComponent