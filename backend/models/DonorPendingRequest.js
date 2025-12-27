const mongoose=require('mongoose');
const { Schema }=mongoose;

const DonorPendingRequestSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'donor'
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
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model('donorpendingrequest',DonorPendingRequestSchema);   