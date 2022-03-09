import { Video } from '../video/video';
import { videoList } from '../../mockData/videoList';
import './videoShow.css';


export const VideoShow = (props)=>{
  // const recommendedVideos = service.getAllVideos();
  const [recommendedVideos,setRecommendedVideos] = useState(service.getAllVideos());

  function indexFunction(a){
    service.deleteVideo(a)
    console.log(videoList)
    const result = service.deleteVideo(a)
    setRecommendedVideos([...result])
  }


  // useEffect(()=>{
  //   setRecommendedVideos(getAllVideos());
  // }, [recommendedVideos]);
    return(     
        videoList.map( (video,  index) =>
          <Video key = {index}                 
            data = {video}>
          </Video>
        )
    )
}