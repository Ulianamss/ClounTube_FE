import React, { Component } from 'react';
import './dataBinding.css'


class DataBinding extends Component {

constructor() {
	super();
	this.state = { 
		video:{
			id:"",
			videoName: "",
    		authorName: "",
			preview: require('../../assets/videoPreview1.jpg'),
        	authorPicture: require('../../assets/videoPreview1.jpg'),
        	views:"",
			uploadedAt:""
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
		id : this.state.id,
		videoName: this.state.video.videoName,
		authorName: this.state.video.authorName,
		preview: this.state.video.preview,
		authorPicture: this.state.video.authorPicture,
		views: this.state.video.views,
		time: this.state.video.uploadedAt
	}
	// console.log(videoObj)


	return (
	<div>
		<input 
			placeholder="enter ID"
			// onChange={this.handleChangeId}>
			 onChange={(e)=> this.props.onChange('id', e.target.value)}>
		</input>

		<input 
			placeholder="Enter name"
			// onChange={this.handleChangeVideoName}>
			onChange={(e)=> this.props.onChange('videoName', e.target.value)}>

		</input>

		<input 
			placeholder="Enter author name"
			// onChange={this.handleChangeAuthorName}>
			onChange={(e)=> this.props.onChange('authorName', e.target.value)}>
		</input>

		<input 
			placeholder="Enter views count"
			// onChange={this.handleChangeViews}>
			onChange={(e)=> this.props.onChange('views', e.target.value)}>
		</input>
        
		<input 
			placeholder="Enter time"
			// onChange={this.handleChangeUploadedAt}>
			onChange={(e)=> this.props.onChange('time', e.target.value)}>
		</input>
	</div>
	)
}
}

export default DataBinding;
