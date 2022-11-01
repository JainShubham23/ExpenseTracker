const mongoose = require('mongoose')

//creating schema design
const userSchema = new mongoose.Schema({
name:{
    type: String,
    required:[true, 'name is required' ]
},
email:{
    type: String,
    required:[true, 'email is required' ],
    unique: true,
},

password: {
    type:String,
    required: [true, 'password is required' ]
},


},
{timestamps: true}

);

//export schema

const userModel = mongoose.model('users', userSchema)
module.exports = userModel