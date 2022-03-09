import React, {useState} from 'react';
import './modalWindow.css'
import service from "../videoShow/services/videoShow.service";
import { videoList } from "../../mockData/videoList";
import UpdateVideoModal from "../updateVideoModal/updateVideoModal"

const ModalWindow = props =>{
    const [show, setShow] = useState(false)

    if (!props.show){
        return null
    }

    return(
        <div className="modalWindow">
            <div className="modalButtonDiv">
                <button onClick={()=> setShow(true)} className="modalButton">Update video</button>
                <UpdateVideoModal closeButton={()=> setShow(false)} show={show} />
               <button onClick = {props.handleDelete} className="modalButton">Delete video</button>
            </div>
            <div className="modalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>

            </div>
        </div>
    )
}

export default ModalWindow