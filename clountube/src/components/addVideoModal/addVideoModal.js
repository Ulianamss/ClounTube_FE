import './addVideoModal.css'
import React, { useState } from "react";
import DataBinding from '../dataBinding/dataBinding'

const AddButtonModalWindow = props =>{
    const [dataAdding, setDataAdding] = useState({
        id:"",
        videoName: "",
        authorName: "",
        preview: require('../../assets/videoPreview1.jpg'),
        authorPicture: require('../../assets/videoPreview1.jpg'),
        views:"",
        uploadedAt:""
    })

    function updateList(field, value){
        setDataAdding({...dataAdding,[field]:value})
        // console.log(dataAdding)
    }

    if (!props.show){
        return null
    }

    return(
        <div className='addButtonModalWindow'>
            <DataBinding onChange ={updateList}/>
            <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>
                <button onClick={()=>props.addVideoSubmitButton(dataAdding)} className="modalButtonSubmit">Submit</button>
            </div>
        </div>
    )
}
export default AddButtonModalWindow