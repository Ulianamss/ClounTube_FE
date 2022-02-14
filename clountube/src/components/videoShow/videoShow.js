import { Video } from '../video/video';
import './videoShow.css';
import service from './services/videoShow.service';
import { useEffect } from 'react';
import { useState } from 'react';


export const VideoShow = (props)=>{
  const recommendedVideos = service.getAllVideos();
  // const [recommendedVideos,setRecommendedVideos] = useState(null);

  // useEffect(()=>{
  //   setRecommendedVideos(getAllVideos());
  // }, [recommendedVideos]);
    return(     
        recommendedVideos.map( (video,  index) =>
          <Video key = {index}                 
            data = {video}>
          </Video>
        )
    )
}