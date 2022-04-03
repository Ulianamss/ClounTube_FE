import './video.css';
import React, {useState} from 'react';
import ModalWindow from '../modalWindow/modalWindow';

export const Video = (props)=>{
    const [show, setShow] = useState(false)
    return(
        <div className='videoBlock'>
            <div className='previewBlock'>
                <button onClick={()=> setShow(true)} className='buttonVideoMenu'>...</button> 
                <ModalWindow 
                    closeButton={()=> setShow(false)} 
                    handleDelete={props.handleDelete}
                    addVideoSubmitButton={props.addVideoSubmitButton}
                    updateVideoSubmitButton={props.updateVideoFunction}
                    show={show}
                    videoProps= {props.data}
                />
                <img className='preview' src={props.data.preview}/>
            
            <div>
               <div className="infoBlock">  
                    <div className='mainInfo'>
                        <img className='authorPic' src={props.data.authorPicture}/>
                        <div className='videoAuthorAndName'>
                            <span className="videoName">{props.data.videoName}</span>
                            <span className="videoauthor">{props.data.authorName}</span>
                        </div>
                    </div>
                    <div className='viewsAndTime'>
                        <span className="videoViews">{props.data.views}</span>
                        <span className="videoTime">{props.data.uploadedAt}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}