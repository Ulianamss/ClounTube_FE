import './updateVideoModal.css'
import React from "react";


const UpdateVideoModal = props =>{
    if (!props.show){
        return null
    }
    return(
        <div className='UpdateVideoModal'>
            <div>:)))</div>

            {/* a.target.value - достать значение которое ввели в  инпут */}
             <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>
            </div>
        </div>
    )

}

export default UpdateVideoModal