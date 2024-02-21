const mongoose = require('mongoose');
let Photo = require('./fotos');


// node:48037) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: 
// useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed 
// in the next major version

//MongoParseError: option usefindandmodify is not supported
//at parseOptions (/home/naopeke/Codenotch/Back-End/MongoDB/dia2/node_modules/mongodb/lib/connection_string.js:267:15)
//at new MongoClient (/home/naopeke/Codenotch/Back-End/MongoDB/dia2/node_modules/mongodb/lib/mongo_client.js:51:63)
//at NativeConnection.createClient (/home/naopeke/Codenotch/Back-End/MongoDB/dia2/node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:293:14)
mongoose.connect('mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/dia2', 
                // {useNewUrlParser : false,
                // useUnifiedTopology: false,
                // useFindAndModify: false
            // }
                );

let photo1 = {
    user_name : "Angelita",
    url: "https://via.placeholder.com/150",
    title: "Monte Fuji",
    description: "Foto del viaje de Japón"
};

let photo2 = {
    user_name : 'Miguel',
    url: 'https://media.traveler.es/photos/61377bcdbf63e581e01021b9/master/w_1280,c_limit/90284.jpg',
    title: 'Salamanca',
    description: 'Salamanca 2021'
};

let photo3 = {
    user_name : 'Juanjo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1024px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg',
    title: 'Málaga',
    description: 'Despedida de soltero'
};

let photo4 = {
    user_name : 'Angelita',
    url: 'https://media.iatiseguros.com/wp-content/uploads/2018/05/04005529/bali-que-hacer-Templo-Ulun-Danu.jpg',
    title: 'Bali',
    description: 'Viaje de Indonesia'
};

let photo5 = {
    user_name : 'Marta',
    url: 'https://media.4-paws.org/f/3/9/1/f39115c5c798651f95141c37b692f76b669af761/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.webp',
    title: 'Puppy',
    description: 'Mi perrito'
};

let photo6 = {
    user_name : 'Marta',
    url: 'https://www.marthastewart.com/thmb/IIv7TLn68Vwsri-lK3Du-H0mqIQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg',
    title: 'Kitten',
    description: 'Migato'
};


function uploadOne(photo){
    Photo.create(photo)
    .then(function()
    {
        console.log('Saved the document from promise');
        mongoose.disconnect();
    })
    .catch(function(err){
        console.log('Error writing the document',err)
    })
}

function uploadMany(photos){
    Photo.insertMany(photos)
    .then(function(){
        console.log('Saved the document');
        mongoose.disconnect();
    })
    .catch(function(err){
        console.log('Error writing the document', err);
    })
}

function findName(user_name){
    Photo.find({user_name})
    .then(function(items){
        console.log(items);
        mongoose.disconnect();
    })
    .catch(function(err){
        console.log('Error', err);
    })
}

function update(title, description){
    Photo.updateOne({title}, {description})
    .then(function(items){
        console.log(items);
        mongoose.disconnect();
    })
    .catch(function(err){
        console.log('Error', err);
    })
}

function deleteOnePic(user_name, title){
Photo.deleteOne({'$and':[{user_name},{title}]})
    .then(function(items){
        console.log(items);
        mongoose.disconnect();
    })
    .catch(function(err){
        console.log('Error', err);
    })
}

function deleteManyPics(user_name){
    Photo.deleteMany({user_name})
    .then(function(items){
        console.log(items);
        mongoose.disconnect();
    })
    .catch(function(){
        console.log('Error');
    })
}






//*********************************************************************/
// Photo.create(photo1)
//     .then(function()
//     {
//         console.log('Saved the document from promise');
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error writing the document')
//     })


// Photo.insertMany([photo2, photo3, photo4, photo5, photo6])
//     .then(function(){
//         console.log('Saved the document');
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error writing the document');
//     })


// Photo.find({user_name:'Angelita'})
//     .then(function(items){
//         console.log(items);
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error');
//     })


// Photo.updateOne({title: 'Monte Fuji'}, {description: 'Viaje de Japón'})
//     .then(function(items){
//         console.log(items);
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error');
//     })


// Photo.deleteOne({'$and':[{user_name:'Angelita'},{title:'Monte Fuji'}]})
//     .then(function(items){
//         console.log(items);
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error');
//     })


// Photo.deleteOne({user_name:'Angelita', title:'Monte Fuji'})
// .then(function(items){
//     console.log(items);
//     mongoose.disconnect();
// })
// .catch(function(){
//     console.log('Error');
// })


// Photo.deleteMany({user_name:'Marta'})
//     .then(function(items){
//         console.log(items);
//         mongoose.disconnect();
//     })
//     .catch(function(){
//         console.log('Error');
//     })
//********************************************* */

// uploadOne(photo1);
// uploadMany([photo2, photo3, photo4, photo5, photo6]);
// findName('Angelita');
// update('Monte Fuji', 'Viaje de Japón');
// deleteOnePic('Miguel', 'Salamanca');
deleteManyPics('Marta');
