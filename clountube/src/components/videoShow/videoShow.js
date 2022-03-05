import { Video } from '../video/video';
import './videoShow.css';
import service from './services/videoShow.service';
import { useEffect } from 'react';
import { useState } from 'react';
import { videoList } from '../../mockData/videoList';


export const VideoShow = (props)=>{
  // const recommendedVideos = service.getAllVideos();
  const [recommendedVideos,setRecommendedVideos] = useState(service.getAllVideos());

  function indexFunction(a){
    service.deleteVideo(a)
    console.log(videoList)
    setRecommendedVideos(service.deleteVideo(a)
    )
  }


  // useEffect(()=>{
  //   setRecommendedVideos(getAllVideos());
  // }, [recommendedVideos]);
    return(     
      recommendedVideos.map( (video,  index) =>
        <Video handleDelete = {() => indexFunction(video.id)} key = {index}                 
          data = {video}>
        </Video>
      )
      // создать функцию которая принимает индекс и  внутри функции вызывает сервис делит передавая индекс
    )
}