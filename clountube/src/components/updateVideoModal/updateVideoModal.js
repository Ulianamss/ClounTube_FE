import './updateVideoModal.css'
import React, { useState } from "react";
import UpdateDataBinding from '../updateDataBinding/updateDataBinding'



const UpdateVideoModal = props =>{    
    const [dataAddingUpdate, setDataAdding] = useState({
        id:"",
        videoName: "",
        authorName: "",
        preview: require('../../assets/videoPreview1.jpg'),
        authorPicture: require('../../assets/videoPreview1.jpg'),
        views:"",
        uploadedAt:""
    })

    function updateList(field, value){
        setDataAdding({...dataAddingUpdate,[field]:value})
        // console.log(dataAddingUpdate)
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
            </div>
            <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="updateModalButtonClose">Close</button>
                <button onClick={()=>props.updateVideoSubmitButton(dataAddingUpdate)} className="modalButtonSubmit">Update</button>
            </div>
        </div>
    )
}

export default UpdateVideoModal