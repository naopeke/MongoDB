const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/dia3', 
                // {
                //     useNewUrlParser : false,
                // useUnifiedTopology: false,
                // useFindAndModify: false
               // }
                );

const TeacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
});

const MarkSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeacherSchema]
});

let marksModel = mongoose.model('bootcamps', MarkSchema);

// let mark1 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 10,
//     student_first_name: 'Miguel',
//     student_last_name: 'Pérez',
//     group_name: 'Presencial',
//     subject_name: 'HTML',
//     teachers: [{
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// });

// let mark2 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 9,
//     student_first_name: 'Miguel',
//     student_last_name: 'Pérez',
//     group_name: 'Presencial',
//     subject_name: 'CSS',
//     teachers: [{
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// })

// let mark3 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 8,
//     student_first_name: 'Miguel',
//     student_last_name: 'Pérez',
//     group_name: 'Presencial',
//     subject_name: 'JavaScript',
//     teachers: [{
//         teacher_first_name: 'Jose',
//         teacher_last_name: 'Herrera'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// })

// let mark4 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 4,
//     student_first_name: 'Maria',
//     student_last_name: 'Teresa',
//     group_name: 'Remote',
//     subject_name: 'HTML',
//     teachers: [{
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// });

// let mark5 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 3,
//     student_first_name: 'Maria',
//     student_last_name: 'Teresa',
//     group_name: 'Remote',
//     subject_name: 'CSS',
//     teachers: [{
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// })

// let mark6 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 2,
//     student_first_name: 'Maria',
//     student_last_name: 'Teresa',
//     group_name: 'Remote',
//     subject_name: 'JavaScript',
//     teachers: [{
//         teacher_first_name: 'Jose',
//         teacher_last_name: 'Herrera'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// })

// let mark7 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 8,
//     student_first_name: 'Jane',
//     student_last_name: 'Doe',
//     group_name: 'Presencial',
//     subject_name: 'React',
//     teachers: [{
//         teacher_first_name: 'Jose',
//         teacher_last_name: 'Herrera'
//     },
//     {
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     }
// ]
// });

// let mark8 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 8,
//     student_first_name: 'Jane',
//     student_last_name: 'Doe',
//     group_name: 'Presencial',
//     subject_name: 'Typescript',
//     teachers: [{
//         teacher_first_name: 'Jose',
//         teacher_last_name: 'Herrera'
//     },
//     {
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     }
// ]
// });

// let mark9 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 6,
//     student_first_name: 'Gabriel',
//     student_last_name: 'Soto',
//     group_name: 'Remote',
//     subject_name: 'Angular',
//     teachers: [{
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// });

// let mark10 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 5,
//     student_first_name: 'Gabriel',
//     student_last_name: 'Soto',
//     group_name: 'Remote',
//     subject_name: 'Typescript',
//     teachers: [{
//         teacher_first_name: 'Menchu',
//         teacher_last_name: 'Martin'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// });

// let mark11 = new marksModel({
//     date: new Date ('2021-03-01'),
//     mark: 9,
//     student_first_name: 'Mary',
//     student_last_name: 'Smith',
//     group_name: 'Remote',
//     subject_name: 'MongoDB',
//     teachers: [{
//         teacher_first_name: 'Jose',
//         teacher_last_name: 'Herrera'
//     },
//     {
//         teacher_first_name: 'Estefania',
//         teacher_last_name: 'Cueva'
//     }
// ]
// });


// marksModel.insertMany([mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10, mark11])
//     .then(function() {
//         console.log('Documentos guardados correctamente');
//         mongoose.disconnect();
//     })
//     .catch(function(error) {
//         console.log('Error al escribir el documento', error);
//     });



// Calcular la nota media de los alumnos de una asignatura concreta.
// marksModel
//    .aggregate([
//       {$match: {subject_name: 'Typescript'}}, 
//       {$group: {_id: 'Typescript', 'Nota Media': {$avg: '$mark'}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });


//• Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
// marksModel
//    .aggregate([
//       {$group: {_id: null, totalAlumnos: {$sum: 1}}},
//       {$project: {_id: 0, totalAlumnos: 1}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });


//• Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
// marksModel
//     .aggregate([
//           {$project:{_id:0, 'Nombre':'$student_first_name', 'Apellido': '$student_last_name'}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });


//Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
// marksModel
// .aggregate([
//     {$unwind: '$teachers'},
//     {$project: {'Nombre':'$teachers.teacher_first_name', 'Apellido': '$teachers.teacher_last_name', _id:0}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });


//• Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
// marksModel
//     .aggregate([
//         {$group:{_id: '$group_name', 'Número total de alumnos': {$sum: 1}}},
//         {$sort: {_id: -1}}
//         ])
//     .then((result) => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//• Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
// marksModel
//     .aggregate([
//         {$group:{_id:'$subject_name', 'nota media': {$avg: '$mark'}}},
//         {$match: {'nota media': {$gt: 5}}},
//         {$sort: {'nota media': -1}},
//         {$limit: 5}
//         ])
//     .then((result) => {
//         console.log(result);
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });


//Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
marksModel
    .aggregate([
        {$unwind: '$teachers'},
        {$group: {_id:'$subject_name', 'numero de profesores': {$sum:1}}},
        {$project: {asignatura: '$_id', 'numero de profesores':1, _id:0}}
    ])
    .then((result) => {
        console.log(result);
        mongoose.disconnect();
    })
    .catch((error) => {
        console.log(error);
    });

