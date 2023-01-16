const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,12)
    }
    next();
})


const User = mongoose.model('USERS',userSchema);

module.exports = User;


