import { RequestHandler } from "express"
import Video from './Video'


export const getVideos:RequestHandler=async (req,res)=>{
    try {
        const videos=await Video.find()
        return res.json(videos)
    } catch (error) {
        res.json(error)
    }
}

export const addVideo:RequestHandler=async(req,res)=>{
    const videoFound=await Video.findOne({url:req.body.url})
    if(videoFound){
        return res.status(301).json({message:'The URL already exist'})
    }
    const video= new Video(req.body)
    const savedVideo=await video.save()
    res.json(savedVideo);
}

export const getVideo:RequestHandler=async (req,res)=>{
    try {
    const videoFound=await Video.findById(req.params.id)
    if(!videoFound){
        return res.status(301).json({message:'The video does not exist'})
    }
    return res.json(videoFound)   
    } catch (error) {
        return res.status(204).json({message:error})
    }    
}

export const deleteVideo:RequestHandler= async(req,res)=>{
    try {
        const videoFound=await Video.findByIdAndDelete(req.params.id)
        if(!videoFound){return res.status(204).json({message: 'Video not found'})}
        return res.json(videoFound)
    } catch (error) {
        return res.status(204).json({message:error})
    }
}

export const updateVideo:RequestHandler=async (req,res)=>{
    try {
        const videoUpdated=await Video.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(videoUpdated)
    } catch (error) {
        return res.status(204).json({message:error})
    }
}