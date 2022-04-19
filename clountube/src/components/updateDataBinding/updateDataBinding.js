import React, { Component } from 'react';
import './updateDataBinding.css'


const UpdateDataBinding = props =>{   
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