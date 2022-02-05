import { Video } from '../video/video';
import { videoList } from '../../mockData/videoList';
import './videoShow.css';


export const VideoShow = (props)=>{
    return(     
        videoList.map( (video,  index) =>
          <Video key = {index}                 
            data = {video}>
          </Video>
        )
    )
}