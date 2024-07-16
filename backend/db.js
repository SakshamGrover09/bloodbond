const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/bloodbond"

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{console.log("Connected pass")}).catch((e)=>console.log(e.message));
}

module.exports=connectToMongo;