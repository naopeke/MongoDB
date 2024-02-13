const mongoose = require('mongoose');


// https://mongoosejs.com/docs/tutorials/dates.html
// https://mongoosejs.com/docs/middleware.html

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: {
        type: Date,
        min: '1987-01-01',
        max: '2018-12-31'
    },
    comments: String, 
    rol: {
        type: String,
        enum:['director', 'teacher', 'student']
    }
});


// reto3

ProfileSchema.pre('save', function(next){
    console.log('Middleware de entrada');
    if ( this.dateOfBirth >= new Date('1987-01-01') && this.dateOfBirth <= new Date('2018-12-31')){
        console.log('Born between 1987 and 2018 :calling next');
        next();
    } else {
        console.log('out of range')
    }
});

ProfileSchema.pre('save', function(next){
    console.log('Middleware de entrada');
    if (!['director', 'teacher', 'student'].includes(this.rol)){
        console.log('This option does not exist');
    } else {
        console.log('ok :calling next');
        next();
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);