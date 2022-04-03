import './updateVideoModal.css'
import React, { useState } from "react";
import UpdateDataBinding from '../updateDataBinding/updateDataBinding'



const UpdateVideoModal = props =>{    
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
        console.log(dataAdding)
    }

    if (!props.show){
        return null
    }

    return(
        <div className='UpdateVideoModal'>
           <div className='addButtonModalWindow'>
            <UpdateDataBinding 
                onChange ={updateList}                    
                updateProps= {props.modalProps}
            />
            <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="updateModalButtonClose">Close</button>
                <button onClick={props.udateVideoSubmitButton} className="modalButtonSubmit">Update</button>
            </div>
        </div>
        </div>
    )
}

export default UpdateVideoModal