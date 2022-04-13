import React, { Component } from 'react';
import './updateDataBinding.css'
import { Video } from '../video/video';


class UpdateDataBinding extends Component {

	constructor(props) {
		// console.log(props)
		super();
		this.state = { 
			video:{
				id:"",
				videoName: "",
	    		authorName: this.authorName,
				preview: require('../../assets/videoPreview1.jpg'),
	        	authorPicture: require('../../assets/videoPreview1.jpg'),
	        	views:this.views,
				uploadedAt:this.uploadedAt
			}
		};
	}


	// handleChangeId = event => {
	// 	this.setState({
	//     	id: event.target.value
	// 	})
	// }
	// handleChangeVideoName = event => {
	// 	this.setState({
	// 		videoName: event.target.value,
	// 	})
	// }
	// handleChangeAuthorName = event => {
	// 	this.setState({
	// 		authorName: event.target.value,
	// 	})
	// }
	// handleChangeViews = event => {
	// 	this.setState({
	// 		views: event.target.value,
	// 	})
	// }
	// handleChangeUploadedAt = event => {
	// 	this.setState({
	// 		uploadedAt: event.target.value,
	// 	})
	// }

	render() {		
		var videoObj = {
			id : this.state.video.id,//id должн браться из видео в видеолисте
			videoName: this.state.video.videoName,
			authorName: this.state.video.authorName,
			preview: this.state.video.preview,
			authorPicture: this.state.video.authorPicture,
			views: this.state.video.views,
			time: this.state.video.uploadedAt
		}
		// console.log(videoObj)
		return (
			<div className='inputUpdateDiv'>			
				<input 
					placeholder={this.props.updateProps.videoName}
					// value="videoName"
					onChange={(e)=>this.props.onChange('videoName',e.target.value)}>
				</input>					
			</div>
		)	
	}
}

export default UpdateDataBinding;	