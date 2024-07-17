const mongoose=require('mongoose');
const { Schema }=mongoose;

const RequestSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'seeker'

    },
    healthissue:{
        type:String,
        required:true
    },
    
    date:{
        type:Date,
        default:Date.now
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('request',RequestSchema);