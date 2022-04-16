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

render() {
	return (
	<div className='inputAddDiv'>
		<input 
			placeholder="enter ID"
			 onChange={(e)=> this.props.onChange('id', e.target.value)}>
		</input>

		<input 
			placeholder="Enter name"
			onChange={(e)=> this.props.onChange('videoName', e.target.value)}>

		</input>

		<input 
			placeholder="Enter author name"
			onChange={(e)=> this.props.onChange('authorName', e.target.value)}>
		</input>

		<input 
			placeholder="Enter views count"
			onChange={(e)=> this.props.onChange('views', e.target.value)}>
		</input>
        
		<input 
			placeholder="Enter time"
			onChange={(e)=> this.props.onChange('time', e.target.value)}>
		</input>
	</div>
	)
}
}

export default DataBinding;
