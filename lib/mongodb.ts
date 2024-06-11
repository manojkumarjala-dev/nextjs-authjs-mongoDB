import mongoose from "mongoose"
if (typeof(process.env.MONGODB_URI)!=='string') {
    throw new Error('Please add your Mongo URI to .env.local');
  }
const connect = async ()=>{
if (mongoose.connections[0].readyState) return;
try{
    await mongoose.connect(process.env.MONGODB_URI!);
}
catch{
    throw new Error("Error connect to MongoDB")
}
}

export default connect