const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 8;
            },
            'The password should be longer'
        ],
        select: false
    }
});

module.exports = mongoose.model('User', UserSchema);