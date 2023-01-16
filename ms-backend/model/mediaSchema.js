const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    fixedlanguage:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

const media = mongoose.model('MEDIA',mediaSchema);

module.exports = media;