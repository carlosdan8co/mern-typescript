import * as dotenv from 'dotenv';
import path from 'path';
//console.log(path.join(__dirname+'.env'));
const result = dotenv.config({ path:  path.join(__dirname+'/.env')});

//console.log(process.env.MONGODB_URI);

export default{
    MONGODB_URI :process.env.MONGODB_URI||'',
    PORT:process.env.PORT||3000
}


