import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true);

const videoSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    url:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},
    {
        versionKey:false,
        timestamps:true
    }
);

export default mongoose.model('Video',videoSchema);