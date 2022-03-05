import { videoList } from "../../../mockData/videoList"

const getAllVideos = () =>{
    return videoList;
}

const updateVideo = (oldName, newVideo) =>{
    const updatedVideoIndex = videoList.findIndex(video =>video.videoName===oldName);
    videoList[updatedVideoIndex]=newVideo; 
    return videoList;   
}

const deleteVideo = (videoId) =>{
    // найти по инексу и удалить
    const videoIndex = videoList.findIndex(video => video.id===videoId);
    videoList.splice(videoIndex,1);    

    // videoList.splice(0,videoIndex)+videoList.splice(videoIndex+1,videoList.length)
    console.log(videoId)
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