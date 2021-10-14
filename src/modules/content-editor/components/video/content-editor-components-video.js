import InputSlot from "../../input-slot/content-editor-input-slot";
import React from 'react';

import SelectInput from '../../input-slot/select-input/content-editor-input-slot-select-input';
import StringInput from '../../input-slot/string-input/content-editor-input-slot-string-input';

class Video extends InputSlot{
	constructor() {
		super();
	}
	editorRender(){
		const { editorState: state, editing } = this.context;

		const isVimeo = state['isVimeo'] ? state['isVimeo'] : false; 
		const videoUrl = state['videoUrl'] ? state['videoUrl'] : '';
		const options = [ false, true ];

		// set up an iframe embed with a youtube url
		const convertYouTubeEmbed = () => {
			const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
			const match= videoUrl.match(regExp);
			if (!match || !match[2]) {
				return false;
			}
			return (
				<iframe 
					className="video-container__video"
					src={`https://www.youtube.com/embed/${match[2]}`}
					frameBorder="0"
					allowFullScreen
				>
				</iframe>
			)
		}

		// set up an iframe embed with a vimeo url
		const convertVimeoEmbed = () => {
			const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
			const match= videoUrl.match(regExp);
			if (!match || !match[1]) {
				return false;
			}
			return (
				<iframe 
					className="video-container__video"
					src={`https://player.vimeo.com/video/${match[1]}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff}`}
					frameBorder="0"
					allowFullScreen
				>
				</iframe>
			)
		}

		const getVideoEmbed = () => {
			if(isVimeo == 'true'){
				return convertVimeoEmbed();
			} else {
				return convertYouTubeEmbed();
			}
		}
	
		let video = (
			<p>No valid video supplied</p>
		)

		if (getVideoEmbed() != false) video = getVideoEmbed();

		if(editing){
			return (
				<div>
					<br/>
					<SelectInput 
						sectionName="isVimeo"
						options={options}
						current={isVimeo}
						optionLabels={['YouTube', 'Vimeo']}
						label = "Type of video: "
						value={isVimeo}
					/>
					<br/>
					<StringInput sectionName="videoUrl"/>
					<br/>
				</div>
			)
			
		} else {
			return (
				<div className="video-container">
					{video}
				</div>
			)
		}
		
	}
}

export default Video;
