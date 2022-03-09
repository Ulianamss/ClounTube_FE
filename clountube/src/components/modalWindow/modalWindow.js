import './modalWindow.css'
import service from "../videoShow/services/videoShow.service";
import { videoList } from "../../mockData/videoList";
import UpdateModalWindow from "../updateModalWindow/updateModalWindow";
import React, {useState} from 'react';


const ModalWindow = props =>{
    const [show, setShow] = useState(false)

    if (!props.show){
        return null
    }

    function deleteVideoButton(videoIndexModal){
        service.deleteVideo(videoIndexModal);
        console.log(videoList)
        console.log(videoIndexModal)
    }

    // function updateVideobutton(){
    // }

    return(
        <div className="modalWindow">
            <div className="modalButtonDiv">
                <button onClick={()=> setShow(true)} className="modalButton">Update video</button>
                <UpdateModalWindow closeButton={()=> setShow(false)} show={show} />
                <button onClick = {props.handleDelete} className="modalButton">Delete video</button>
            </div>
            <div className="modalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>
            </div>
        </div>
    )
}

export default ModalWindow