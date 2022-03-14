import './addVideoModal.css'
import React from "react";
import DataBinding from '../dataBibding/dataBinding'

const AddButtonModalWindow = props =>{
    if (!props.show){
        return null
    }

    return(
        <div className='addButtonModalWindow'>
            <DataBinding/>
            <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>
                <button onClick={props.addVideoSubmitButton} className="modalButtonSubmit">Submit</button>
            </div>
        </div>
    )
}
export default AddButtonModalWindow