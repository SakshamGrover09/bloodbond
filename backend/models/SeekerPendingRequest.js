const mongoose=require('mongoose');
const { Schema }=mongoose;

const SeekerPendingRequestSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'seeker'
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true
    },
    healthissue:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model('seekerpendingrequest',SeekerPendingRequestSchema);  