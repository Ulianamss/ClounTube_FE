import './videoShow.css';
import { Video } from '../video/video';
import service from './services/videoShow.service';
import {  useState , useEffect } from 'react';


export const VideoShow = (props) => {
  const [recommendedVideos, setRecommendedVideos] = useState(service.getAllVideos());
  
  function addVideoFunction(videoObj){
    console.log('submitted')
    const result = service.createVideo(videoObj)
    setRecommendedVideos([...result])  
  }

  function updateVideoFunction(newVideo,videoId){
    const result = service.updateVideo(newVideo,videoId)
    setRecommendedVideos([...result])  
  }

  function indexFunctionDelete(videoIndex) {    
    const result = service.deleteVideo(videoIndex)
    setRecommendedVideos([...result])
  }

  return (
    recommendedVideos.map((video, index) =>
      <Video 
        addVideoSubmitButton={addVideoFunction}
        updateVideoSubmitButton={updateVideoFunction}
        handleDelete={() => indexFunctionDelete(video.id)}
        key={index}
        data={video}>
      </Video>
    )
  )
}