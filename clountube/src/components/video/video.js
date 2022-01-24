// import {videoList} from '../mockData/videoList';
import './video.css';


export const Video = (props)=>{
    return(
        <div className='videoBlock'>
            <div className='previewBlock'>
                <img className='preview' src={props.data.preview}/>
            
            <div>
               <div className="infoBlock">  
                    <div className='mainInfo'>
                        <img className='authorPic' src={props.data.authorPic}/>
                        <div className='videoAuthorAndName'>
                            <p className="videoName">{props.data.videoName}</p>
                            <p className="videoauthor">{props.data.authorName}</p>
                        </div>
                    </div>
                    <div className='viewsAndTime'>
                        <p className="videoViews">{props.data.views}</p>
                        <p className="videoTime">{props.data.uploadedAt}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}