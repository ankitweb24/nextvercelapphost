import mongoose from "mongoose";
const mongoose_URL = "mongodb+srv://ankitjangir232323:hOKzS61J7hVPfzIm@cluster0.wmkoncc.mongodb.net/nextnewweb?retryWrites=true&w=majority";
// const mongoose_URL = "mongodb://localhost:27017";

if(!mongoose_URL){
    throw new Error(
        "please define the url enviroment variable"
    )
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {con : null, Promise : null}
}

const dbConnect = async () =>{
    if(cached.conn){
        return cached.conn
    }

if(!cached.Promise){
    const opts = {
        bufferCommands : false
    };

    cached.Promise = mongoose.connect(mongoose_URL, opts).then((mongoose) =>{
        return mongoose
    })
}

try {
    cached.con = await cached.Promise;
} catch (error) {
    cached.Promise = null;
    throw error;
}
return cached.conn;
}

export default dbConnect;