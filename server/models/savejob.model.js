const mongoose = require("mongoose");
const saveJobSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PostJob",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
});
saveJobSchema.index({user:1 , job:1} , {unique:true});
const SaveJob = mongoose.model("SaveJob" , saveJobSchema);
module.exports = SaveJob;