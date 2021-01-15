//import { setupMaster } from 'cluster'
import React from 'react'
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'
import {Video} from './Video'
import * as videoService from './VideoService'
import './VideoItem.css'

interface Props{
    video:Video
    loadVideos:()=>void;
}



const VideoItem = ({video,loadVideos}:Props) => {
    const history = useHistory();
    const handleDelete=async(id:string)=>{
        await videoService.deleteVideo(id);
        toast.warning('Video deleted succesfully',{position: "top-center"})
        loadVideos()
    }
    return (
            <div className="col-md-4 p-2">
                <div className="card my-auto text-center video-card" >
                    <div className="card-title d-flex justify-content-between" style={{cursor:'pointer'}}>
                        <h1 onClick={()=>history.push(`/update/${video._id}`)}>{video.title}</h1>
                        <span className="text-danger" onClick={()=>video._id&&handleDelete(video._id)}>X</span>
                    </div>
                    <div className="card-body">
                        <p>{video.description}</p>
                        <div className="embed-responsive embed-responsive-16by9">
                            <ReactPlayer url={video.url} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default VideoItem
