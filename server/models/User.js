const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    
    username : {type : String,require: true}, 
    password : {type : String,require: true},

    followers : [{type : mongoose.Schema.Types.ObjectId, req : 'users'}] ,
    following : [{type : mongoose.Schema.Types.ObjectId, req : 'users'}] ,
    profilePicUrl : {type : String, required:false , default: ''},
    bio : {type : String, required:false , default:''},
    savedPosts : [],
    //archeivedPosts : []
    
} , {
    timestamps : true,
})

module.exports = mongoose.model("User",userSchema)