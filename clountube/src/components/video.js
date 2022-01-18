import {videoList} from '../common/videoList';

export const Video = (props)=>{
    return(
        <div>
            <div>
                <img source={props.data.preview}/>
            </div>
            <div>
               <div className="infoBlock">  
                    <img source={props.data.authorPic}/>
                    <p className="videoName">{props.data.name}</p>
                    <p className="videoauthor">{props.data.authorName}</p>
                    <p className="videoViews">{props.data.views}</p>
                    <p className="videoTime">{props.data.uploadedAt}</p>
                </div>
            </div>
        </div>
    )
}