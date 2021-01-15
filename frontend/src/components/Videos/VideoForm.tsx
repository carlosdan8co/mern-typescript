import React,{ChangeEvent,useState,FormEvent,useEffect} from "react";
import {useHistory,useParams} from 'react-router-dom'
import { Video } from "./Video";
import * as videoService from './VideoService';
import {toast} from 'react-toastify'

type InputChange=ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params{
  id:string
}

const VideoForm = () => {
  const history=useHistory();
  const params=useParams<Params>();
  const initialState={
    title:"",
    description:"",
    url:""  
  }
    const [video, setVideo] = useState<Video>(initialState);
    
    const handleInputChange=(e: InputChange)=>{
        setVideo({...video,[e.target.name]:e.target.value});
    }

    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(!params.id){
      await videoService.createVideo(video)
      toast.success('New video added',{position: "top-center"})
      setVideo(initialState)
      }else{
        await videoService.updateVideo(params.id,video);
        toast.success('Video updated',{position: "top-center"})
      }
      history.push('/')
    };

    const getVideo= async(id:string)=>{
      const res = await videoService.getVideo(id);
      const {title, url,description}=res.data;
      setVideo({title,url,description});
    }

    useEffect(()=>{
      if(params.id) getVideo(params.id);
    },[params.id])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            {params.id?<h3>Update Video</h3>:<h3>New Video</h3>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title for this video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={video.title}
                />
              </div>

                <div className="form-group">
                    <input
                    type="text"
                    name="url"
                    placeholder="http://somesite.com" 
                    onChange={handleInputChange}
                    value={video.url}
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <textarea name="description" rows={3} className="form-control"
                    onChange={handleInputChange}
                    value={video.description}
                    placeholder="describe your video"></textarea>
                </div>
                {
                  params.id?
                  <button className="btn btn-info btn-block">Update</button>
                  :
                  <button className="btn btn-primary btn-block">Create</button>

                }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
