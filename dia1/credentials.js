const mongoose = require('mongoose');

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
});

//reto3

CredentialsSchema.pre('save', function(next){
    console.log('Middleware de entrada');
    if (this.phone.length < 9){
        console.log('Tel number is too short');
    } else {
        console.log('The length is ok: calling next');
        next();
    }
});


CredentialsSchema.pre('save', function(next){
    console.log('Middleware de entrada');
    if (!this.email.includes('@')){
        console.log('Email does not contain "@"');
    } else {
        console.log('Email contains "@" ok: calling next');
        next();
    }
});

module.exports = mongoose.model('Credentials', CredentialsSchema);