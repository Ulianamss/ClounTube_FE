import { videoList } from "../../../mockData/videoList"

const getAllVideos = () =>{
    return videoList;
}

const updateVideo = (oldName, newVideo) =>{
    const updatedVideoIndex = videoList.findIndex(video =>video.videoName===oldName);
    videoList[updatedVideoIndex]=newVideo; 
    return videoList;   
}

const deleteVideo = (name) =>{
    // найти по инексу и удалить
    const videoIndex = videoList.findIndex(video => video.videoName===name);
    videoList.splice(videoIndex,1);
    return videoList
}

const createVideo = () =>{
    // push
    // return videoList
}


const service = {
    getAllVideos,
    updateVideo,
    deleteVideo,
    createVideo,
}


export default service