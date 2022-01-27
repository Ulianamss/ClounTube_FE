import './video.css';


export const Video = (props)=>{
    return(
        <div className='videoBlock'>
            <div className='previewBlock'>
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