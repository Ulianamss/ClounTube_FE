import React from "react";
import './modalWindow.css'
import service from "../videoShow/services/videoShow.service";
import { videoList } from "../../mockData/videoList";

const ModalWindow = props =>{
    if (!props.show){
        return null
    }
    // const deleteVideobutton = alert ("delete")//service.deleteVideo();
    // const updateVideobutton = alert ("update")//service.deleteVideo();

    function deleteVideobutton(videoIndex){
        service.deleteVideo(videoIndex);
        console.log(videoList)
        console.log(videoIndex)
    }

    function updateVideobutton(){
        alert ("update")
    }

    return(
        <div className="modalWindow">
            <div className="modalButtonDiv">
                <button onClick={updateVideobutton} className="modalButton">Update video</button>
                <button onClick={deleteVideobutton} className="modalButton">Delete video</button>
            </div>
            <div className="modalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>

            </div>
        </div>
    )
}

export default ModalWindow