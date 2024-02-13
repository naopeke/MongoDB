const mongoose = require('mongoose');
let User = require('./user');
let Profile = require('./profile');
let Credentials = require('./credentials');



// node:48037) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: 
// useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed 
// in the next major version
mongoose.connect('mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/codenotch', 
                {useNewUrlParser : false,
                useUnifiedTopology: false}
                );

// let userDocument1 = new User({
//     login: "Cathy",
//     password: "cathycat"
// });

// userDocument1.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


let userDocument2 = new User({
    login: "Michael",
    password: "mikeydog"
});

userDocument2.save()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });


// let profileDocument1 = new Profile({
//     name: "Kate",
//     surname: "Smith",
//     dateOfBirth: "2000-05-15",
//     comments: "onbording",
//     rol: "teacher"
// });

// profileDocument1.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// let profileDocument2 = new Profile({
//     name: "Michel",
//     surname: "Welsh",
//     dateOfBirth: "2018-03-15",
//     comments: "new",
//     rol: "student"
// });

// profileDocument2.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// let credentialDocument1 = new Credentials({
//     address: "Calle Jose Echegaray",
//     phone: 123456789,
//     email:"kate@hopmail.es"
// });

// credentialDocument1.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// let credentialDocument2 = new Credentials({
//     address: "Calle Ray",
//     phone: 987654321,
//     email:"mike@hopmail.es"
// });

// credentialDocument2.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });