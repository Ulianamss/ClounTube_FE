import { Video } from '../video/video';
import { videoList } from '../../mockData/videoList';
import './videoShow.css';


export const VideoShow = (props)=>{
    return(     
        videoList.map( video =>
          <Video                 
            data = {video}>
          </Video>
        )
    )
}