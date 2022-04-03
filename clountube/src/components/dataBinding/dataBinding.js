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

handleChangeId = event => {
	this.setState({
    	id: event.target.value
	})
}
handleChangeVideoName = event => {
	this.setState({
		videoName: event.target.value,
	})
}
handleChangeAuthorName = event => {
	this.setState({
		authorName: event.target.value,
	})
}
handleChangeViews = event => {
	this.setState({
		views: event.target.value,
	})
}
handleChangeUploadedAt = event => {
	this.setState({
		uploadedAt: event.target.value,
	})
}


render() {

	var videoObj = {
		id : this.state.id,
		videoName: this.state.videoName,
		authorName: this.state.video.authorName,
		preview: this.state.video.preview,
		authorPicture: this.state.video.authorPicture,
		views: this.state.video.views,
		time: this.state.video.uploadedAt
	}
	console.log(videoObj)


	return (
	<div>
		<input 
			placeholder="enter ID"
			onChange={this.handleChangeId}>
			{/*  onChange={(e)=> this.props.onChange}> */}
		</input>

		<input 
			placeholder="Enter name"
			onChange={this.handleChangeVideoName}>
		</input>

		<input 
			placeholder="Enter author name"
			onChange={this.handleChangeAuthorName}>
		</input>

		<input 
			placeholder="Enter views count"
			onChange={this.handleChangeViews}>
		</input>
        
		<input 
			placeholder="Enter time"
			onChange={this.handleChangeUploadedAt}>
		</input>
 		
        <p>ID: {this.state.id}</p>
		<p>название: {this.state.videoName} </p>
        <p>автор: {this.state.authorName}</p>
		<p>views: {this.state.views}</p>
        <p>time: {this.state.uploadedAt}</p> 

	</div>
	)
}
}

export default DataBinding;
