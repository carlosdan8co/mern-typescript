import mongoose,{ConnectionOptions} from 'mongoose'

import config from './config'

(async()=>{
    try {
        
        const mongooseOptions:ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser:true,
            useFindAndModify: false
        }
        //console.log(config.MONGODB_URI)
        const db= await mongoose.connect(config.MONGODB_URI,mongooseOptions)
        console.log('DB is connected to:',db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()