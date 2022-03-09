import './updateModalWindow.css'
import React from "react";


const UpdateModalWindow = props =>{
    if (!props.show){
        return null
    }
    return(
        <div className='updateModalWindow'>
            <div>:)))</div>

            {/* a.target.value - достать значение которое ввели в  инпут */}
             <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>
            </div>
        </div>
    )

}

export default UpdateModalWindow