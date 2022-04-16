import './updateVideoModal.css'
import React, { useState } from "react";
import UpdateDataBinding from '../updateDataBinding/updateDataBinding'



const UpdateVideoModal = props =>{    
    const [dataAddingUpdate, setDataAddingUpdate] = useState({
        id:props.modalProps.id,
        videoName: "",
        authorName: props.modalProps.authorName,
        preview: require('../../assets/videoPreview1.jpg'),
        authorPicture: require('../../assets/videoPreview1.jpg'),
        views:props.modalProps.views,
        uploadedAt:props.modalProps.uploadedAt
    })
    console.log(props)

    function updateList(field, value){
        setDataAddingUpdate({...dataAddingUpdate,[field]:value})
        console.log(dataAddingUpdate)
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
                <button onClick={()=>props.updateVideoSubmitButton(dataAddingUpdate, props.modalProps.id)} className="modalButtonSubmit">Update</button>
                {/* <button onClick={()=>props.updateVideoSubmitButton(dataAddingUpdate, props.updateProps)} className="modalButtonSubmit">Update</button> */}

            </div>
        </div>
    )
}

export default UpdateVideoModal
