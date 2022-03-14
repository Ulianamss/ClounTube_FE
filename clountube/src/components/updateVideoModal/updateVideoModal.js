import './updateVideoModal.css'
import React from "react";


const UpdateVideoModal = props =>{
    if (!props.show){
        return null
    }


  // function indexFunctionUpdate(a) {    
    //     const result = service.updateVideo(a)
    //     console.log(result)
    //     setRecommendedVideos([...result])
    //     console.log(videoList)
    //     console.log(result)
    // }

    //     recommendedVideos.map((video, index) =>
    //       <Video 
    //         handleUpdate={() => indexFunctionUpdate(video.id)}
    //         key={index}
    //         data={video}>
    //       </Video>
    //   )


    return(
        <div className='UpdateVideoModal'>
            <div>:)))</div>

            {/* a.target.value - достать значение которое ввели в  инпут */}
             <div className="updateModalCloseDiv">
                <button onClick={props.closeButton} className="modalButtonClose">Close</button>
            </div>
        </div>
    )

}

export default UpdateVideoModal