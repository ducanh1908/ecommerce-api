const mongoose = require('mongoose')
const userSchema =  new mongoose.Schema({
    fullName: {type : String, required: true},
    username: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},

    password: {type: String, require: true, unique: true},

    isAdmin: {type: Boolean, default: false}, 
},
{timestamps: true}
);

module.exports =  mongoose.model('User', userSchema)