import './videoShow.css';
import { Video } from '../video/video';
import service from './services/videoShow.service';
import {  useState , useEffect } from 'react';
import { videoList } from '../../mockData/videoList';


export const VideoShow = (props) => {
  const [recommendedVideos, setRecommendedVideos] = useState(service.getAllVideos());
  
  function addVideoFunction(videoObj){
    console.log('submitted')
    const result = service.createVideo(videoObj)
    console.log(result)
    setRecommendedVideos([...result])
  
  }

  function indexFunctionDelete(videoIndex) {    
    const result = service.deleteVideo(videoIndex)
    console.log(result)
    setRecommendedVideos([...result])
  }

  return (
    recommendedVideos.map((video, index) =>
      <Video 
        handleDelete={() => indexFunctionDelete(video.id)}
        addVideoSubmitButton={()=>addVideoFunction()}
        key={index}
        data={video}>
      </Video>
    )
  )
}