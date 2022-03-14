import React, {useState} from 'react';
import './modalWindow.css'
import UpdateVideoModal from "../updateVideoModal/updateVideoModal"
import AddVideoModal from '../addVideoModal/addVideoModal'

const ModalWindow = props =>{
    const [show, setShow] = useState(false)

    if (!props.show){
        return null
    }

    return(
        <div className="modalWindow" onClick={props.closeButton}>
            <div  onClick={e => e.stopPropagation()}>
                <div className="modalButtonDiv">
                    <button onClick={()=> setShow(true)} className='modalButton'>Add video</button>
                    <AddVideoModal 
                        closeButton={()=> setShow(false)}
                        addVideoSubmitButton={props.addVideoSubmitButton}
                        show={show}
                    />
                    <button onClick={()=> setShow(true)} className="modalButton">Update video</button>
                    <UpdateVideoModal 
                        closeButton={()=> setShow(false)} 
                        show={show}
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