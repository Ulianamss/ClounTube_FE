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
    // console.log(videoObj)
    setRecommendedVideos([...result])  
    // console.log(videoList)
  }

  function updateVideoFunction(videoId,newVideo){
    console.log('updated')
    const result = service.updateVideo(videoId,newVideo)
    console.log(videoId)
    console.log(newVideo)
    setRecommendedVideos([...result])  
    console.log(videoList)
  }

  function indexFunctionDelete(videoIndex) {    
    const result = service.deleteVideo(videoIndex)
    console.log(result)
    setRecommendedVideos([...result])
  }

  return (
    recommendedVideos.map((video, index) =>
      <Video 
        addVideoSubmitButton={addVideoFunction}
        updateVideoSubmitButton={updateVideoFunction}
        // updateVideoSubmitButton={()=>updateVideoFunction(video.id)}
        handleDelete={() => indexFunctionDelete(video.id)}
        key={index}
        data={video}>
      </Video>
    )
  )
}