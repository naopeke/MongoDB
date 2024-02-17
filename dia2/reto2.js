const mongoose = require('mongoose');
let models = require('./mark');

// node:48037) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: 
// useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed 
// in the next major version

//MongoParseError: option usefindandmodify is not supported
//at parseOptions (/home/naopeke/Codenotch/Back-End/MongoDB/dia2/node_modules/mongodb/lib/connection_string.js:267:15)
//at new MongoClient (/home/naopeke/Codenotch/Back-End/MongoDB/dia2/node_modules/mongodb/lib/mongo_client.js:51:63)
//at NativeConnection.createClient (/home/naopeke/Codenotch/Back-End/MongoDB/dia2/node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:293:14)
mongoose.connect('mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/dia2-2', 
                // {useNewUrlParser : false,
                // useUnifiedTopology: false,
                // useFindAndModify: false}
                );


//Insertar 4 documentos en la nueva base de datos.
// let student1 = new models.Student({
//     firstName: 'Elena',
//     lastName: 'Gonzalez',
//     marks: [
//         {
//         date: new Date('2020-03-01'),
//         mark: 9,
//         subjects:{
//             title: 'Inglés',
//             teachers: [{
//                 firstName:'John',
//                 lastName:'Doe',
//                 groups:['3A', '4A']
//             }]
//         }
//         },
//         {
//             date: new Date('2020-03-01'),
//             mark: 10,
//             subjects:{
//                 title: 'Psicomotricidad',
//                 teachers: [
//                 {
//                     firstName:'Emily',
//                     lastName:'Smith',
//                     groups:['3A', '4A']
//                 },
//                 {
//                     firstName:'Luis',
//                     lastName:'Gonzalo',
//                     groups:['3A', '4A']
//                 }
//             ]
//             }
//         }
//     ]
// });

// let student2 = new models.Student({
//     firstName: 'Pablo',
//     lastName: 'Guerrero',
//     marks: [{
//         date: new Date('2021-03-01'),
//         mark: 10,
//         subjects:{
//             title: 'Inglés',
//             teachers: [{
//                 firstName:'John',
//                 lastName:'Doe',
//                 groups:['3A', '3B']
//             }]
//         }
//     }]
// });

// let student3 = new models.Student({
//     firstName: 'Carmen',
//     lastName: 'Martinez',
//     marks: [{
//         date: new Date('2022-03-01'),
//         mark: 6,
//         subjects:{
//             title: 'Matemáticas',
//             teachers: [{
//                 firstName:'Luis',
//                 lastName:'Gonzalo',
//                 groups:['6A', '6B']
//             }]
//         }
//     }]
// });

// let student4 = new models.Student({
//     firstName: 'Miguel Angel',
//     lastName: 'Campo',
//     marks: [{
//         date: new Date('2021-03-01'),
//         mark: 10,
//         subjects:{
//             title: 'Arte',
//             teachers: [{
//                 firstName:'Raul',
//                 lastName:'Morino',
//                 groups:['6A', '6B']
//             }]
//         }
//     }]
// });



// models.Student.insertMany([student1, student2, student3, student4])
//     .then(function(){
//         console.log('Saved the document');
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error writing the document');
//     })


//Todas las notas de un alumno.
models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'}, 'marks')
    .then(function(student){
        let notas = student.marks.map(function(currentValue){
             return currentValue.mark});
        console.log('Notas de Elena: ', notas);
    })
    .catch(function(){
        console.log('Error');
    })

models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'}, 'marks')
    .then(function(student){
        console.log('Notas de Elena: ')
        let notas = student.marks.forEach(function(currentValue){
            return console.log(`${currentValue.subjects.title},${currentValue.mark}`)
        })
    })
    .catch(function(){
        console.log('Error');
    })


//Todas las asignaturas de un alumno.
models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'})
    .then(function(student){
        let asignaturas = student.marks.map(function(currentValue){
           return currentValue.subjects.title});
        console.log('Asignatura de Elena: ', asignaturas);
    })
    .catch(function(){
        console.log('Error');
    })

models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'})
    .then(function(student){
        let asignaturas = [];
        student.marks.forEach(currentValue => asignaturas.push(currentValue.subjects.title));
        console.log('Asignatura de Elena: ', asignaturas);
    })
    .catch(function(){
        console.log('Error');
    })


//Todos las asignaturas de un alumno.
models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'})
    .then(function(student){
        let profesores = [];
        student.marks.forEach(currentValue => profesores.push(currentValue.subjects.teachers));
        console.log('Profesores de Elena: ', profesores);
    })
    .catch(function(){
        console.log('Error');
    })

models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'})
    .then(function(student){
        student.marks.forEach(mark => {
            mark.subjects.teachers.forEach( teacher =>{
                console.log(`Profesores de Elena: ${teacher.firstName} ${teacher.lastName}`)
            })
        })
    })
    .catch(function(){
        console.log('Error');
    })




// ↓ Esto no funciona porque subjects es un object
// models.Student.findOne({'_id': '65cfadc2d980512abcc62b31'})
// .then(function(student){
//     let profesores = [];
//     student.marks.forEach(mark => {
//         mark.subjects.forEach(subject => {
//             subject.teachers.forEach(teacher => {
//                 profesores.push(`${teacher.firstName} ${teacher.lastName}`)
//             })
//         })
//     })
//     console.log('Profesores de Elena: ', profesores);
// })
// .catch(function(error){
//     console.log('Error', error);
// })