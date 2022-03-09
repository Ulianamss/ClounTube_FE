import './videoShow.css';
import { Video } from '../video/video';
import service from './services/videoShow.service';
import { useEffect } from 'react';
import { useState } from 'react';
import { videoList } from '../../mockData/videoList';


export const VideoShow = (props) => {
  const [recommendedVideos, setRecommendedVideos] = useState(service.getAllVideos());

  function indexFunction(a) {
    
    const result = service.deleteVideo(a)
    console.log(result)

    setRecommendedVideos([...result])
    // service.deleteVideo(a)
    console.log(videoList)
    // console.log(videoList)
    console.log(result)
  }
  
  return (
    recommendedVideos.map((video, index) =>
      <Video handleDelete={() => indexFunction(video.id)} key={index}
        data={video}>
      </Video>
    )
  )
}