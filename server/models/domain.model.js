const mongoose = require("mongoose");
const domainSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    
});

const Domain = mongoose.model("Domain" , domainSchema);
module.exports = Domain