const mongoose=require('mongoose');
const { Schema }=mongoose;

const SeekerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
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
    mobile:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model('seeker',SeekerSchema);    //database me user name se save hoga
