var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contactNo: {
        type: number,
        required: true
    },

    Password:{
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('user', userSchema);