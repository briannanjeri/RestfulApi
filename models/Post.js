const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }

})

module.exports=mongoose.model('Posts', PostSchema)