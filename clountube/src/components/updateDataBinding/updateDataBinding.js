import React, { Component } from 'react';
import './updateDataBinding.css'


const UpdateDataBinding = props =>{   



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

		// var videoObj = {
		// 	id : this.state.video.id,//id должн браться из видео в видеолисте
		// 	videoName: this.state.video.videoName,
		// 	authorName: this.state.video.authorName,
		// 	preview: this.state.video.preview,
		// 	authorPicture: this.state.video.authorPicture,
		// 	views: this.state.video.views,
		// 	time: this.state.video.uploadedAt
		// }
		// console.log(videoObj)
		return (
			<div className='inputUpdateDiv'>			
				<input 
					placeholder={props.updateProps.videoName}
					// value="videoName"
					onChange={(e)=>props.onChange('videoName',e.target.value)}>
				</input>					
			</div>
		)	
	}

export default UpdateDataBinding;	