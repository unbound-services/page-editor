import React from 'react';
import ReactDom from 'react-dom';

import FileInput from './modules/content-editor/input-slot/file-input/content-editor-input-slot-file-input.js';
class ImageComponent extends React.Component {

	constructor(props){
		super(props);
		let state = {}
		this.state = state;
	}

	render() {
		const { sectionName, image = false } = props;

		let labelText = 'Upload an image';

		if(image){
			imageSection = (
				<div>
					<h2>Current Image</h2>
					<img src={image} alt="image to be applied to page" />
				</div>
			)
			labelText = 'Replace image'
		}

		const onChange = () => {
			console.log('submit')
		}
		
		return (
			<div>
				{imageSection}
				<label>
					{labelText}
					<FileInput sectionName={sectionName} className={inputClass}  />
				</label>
				<button onChange={onChange}>Upload</button>
			</div>
		)
	}

}

export default ImageComponent;
