import React, {useState} from 'react';
import './modalWindow.css'
import UpdateVideoModal from "../updateVideoModal/updateVideoModal"
import AddVideoModal from '../addVideoModal/addVideoModal'

const ModalWindow = props =>{
    const [showAdd, setShowAdd] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false)


    if (!props.show){
        return null
    }

    return(
        <div className="modalWindow" onClick={props.closeButton}>
            <div  onClick={e => e.stopPropagation()}>
                <div className="modalButtonDiv">
                    <button onClick={()=> setShowAdd(true)} className='modalButton'>Add video</button>
                    <AddVideoModal 
                        closeButton={()=> setShowAdd(false)}
                        addVideoSubmitButton={props.addVideoSubmitButton}
                        show={showAdd}
                    />
                    <button onClick={()=> setShowUpdate(true)} className="modalButton">Update video</button>
                    <UpdateVideoModal 
                        closeButton={()=> setShowUpdate(false)} 
                        updateVideoSubmitButton={props.updateVideoSubmitButton}
                        show={showUpdate}
                        modalProps= {props.videoProps}
                    />
                    <button onClick = {props.handleDelete} className="modalButton">Delete video</button>
                </div>
                <div className="modalCloseDiv">
                    <button onClick={props.closeButton} className="modalButtonClose">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow