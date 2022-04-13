import { videoList } from "../../../mockData/videoList"

const getAllVideos = () =>{
    return videoList;
}

const updateVideo = (newVideo,videoId) =>{
    const updatedVideoIndex = videoList.findIndex(video =>video.id===videoId);
    videoList[updatedVideoIndex]=newVideo; 
    return videoList;   
}

const deleteVideo = (videoId) =>{
    const videoIndex = videoList.findIndex(video => video.id===videoId);
    videoList.splice(videoIndex,1);    
    return videoList
}

const createVideo = (newVideo) =>{
    videoList.push(newVideo);
    return videoList
}

const service = {
    getAllVideos,
    updateVideo,
    deleteVideo,
    createVideo,
}
export default service