var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = {User};