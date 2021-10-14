import React from 'react';
import ReactDOM from 'react-dom';
import InputSlot from "../content-editor-input-slot";

import ImageSelectDrawer from '../../common/image-drawer/content-editor-common-image-drawer.js';

class FileInput extends InputSlot {

	constructor(){
		super();
		this.state={open:false}
	}

	editorRender(){
		const { sectionName, className='', hidden=false, label=null, ...otherProps } = this.props;

		const { editorState: state, editing} = this.context



		const openDrawer = () => {
			this.setState({open: true})
		}
		const closeDrawer = () => {
			this.setState({open: false})
		}

		let currentImage = null;
		if(state[sectionName]) {
			currentImage = <img src={state[sectionName]} />
		}

		if(hidden){
			currentImage = null;
		}
		let buttonLabel=null;
		if(label){
			buttonLabel = <label>{label}</label>;
		}
		
		if(editing){
			return <React.Fragment>
				{currentImage}
				{buttonLabel}
				<button onClick={openDrawer}>Open Drawer</button>
				<ImageSelectDrawer 
					onChange={url => this.context.setState({[sectionName]: url})} 
					onClose={closeDrawer} 
					open={this.state.open} />
			</React.Fragment>
		}else{
			if(hidden){
                return null;
			}
			const TagName=this.props.TagName ? this.props.TagName : React.Fragment;
            return <TagName  {...otherProps} >
                {currentImage}

            </TagName>
        
		}

		

	}
}

export default FileInput;
