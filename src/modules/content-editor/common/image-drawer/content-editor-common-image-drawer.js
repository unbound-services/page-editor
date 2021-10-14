import React, {useCallback} from 'react';
import ReactDom from 'react-dom';
import agent from 'superagent'

import Drawer from '../../../../modules/common/drawer/common-drawer.js';
import ImageUpload from './upload/content-editor-common-image-drawer-upload.js'
//const csrf = document.head.querySelector("[name~=csrf-token][content]").content;

class ImageSelectDrawer extends React.Component {
	constructor(props){
		super(props);
		let state = {images: []}
		this.state = state;
	}

	componentDidUpdate(prevProps) {
		if (this.props.open && !prevProps.open) {
			this.refreshImages();
		}
	  }

	refreshImages(){
		console.warn("refresh image disabled");
		//const request = agent.get(`/pages/${window.pageIndex}/page-images`)
		//			.set('X-CSRF-TOKEN', csrf);
		//	
		//		request.then((res)=>{
		//			this.processImageRequest(res);

		//		});
	}

	processImageRequest(res){
		if(res.body && res.body.images) {
			this.setState({images:res.body.images.map(image=>'/'+image.path.replace('public/imgs/','storage/imgs/'))})
		}
	}

	render(){
		const { open, onClose, onChange } = this.props;

		const { images } = this.state;
		let imageSection = '';
		if(images && images.length){
			// map out the images to individual items
			let imageList = images.map((src, index)=>{
				return (
					<li key={index}>
						<img style={{width:100, height:'auto'}} 
							src={src} 
							alt="image1"
							onClick={e=>onChange(src)} />
					</li>
				)
			});

			// nest inside individual list
			imageSection = (
				<ul>
					{imageList}
				</ul>
			)
		}

		const onDrop = selectedFiles => {
			
			console.warn("upload image disabled");
			//if(selectedFiles) {
			//	const postUrl = `/pages/${window.pageIndex}/add-images`

			//	const request = agent.post(postUrl)
			//		.set('X-CSRF-TOKEN', csrf);
			//	
			//	selectedFiles.forEach(file => request.attach("images[]", file))

			//	request.then((res)=>{
			//		this.processImageRequest(res);
			//	});
			//}
		}
		return (
			<Drawer onClose={onClose} open={open} innerClass='image-select-drawer'>
				{imageSection}
				<ImageUpload onDrop={onDrop} />
			</Drawer>
		)
	}
}

export default ImageSelectDrawer;
