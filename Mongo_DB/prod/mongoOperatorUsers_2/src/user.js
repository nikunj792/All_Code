const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is Required.'],
        validate:{
            validator:(name)=>name.length >2,
            message:'Name must be longer than 2 character'
        }
    },
    postCount: Number
});

const User = mongoose.model('user', userSchema);

module.exports = User;
