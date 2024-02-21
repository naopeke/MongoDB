
const PhotoModel = require('../models/photo');


function getAllPics(req, res){
    PhotoModel.find({user_name: req.query.user_name})
        .then((photo) =>{
            console.log(req.query.user_name);
            console.log(photo);
            res.send(photo)
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1);
        })
}

function uploadOne(req, res){
    console.log(req.body);

    let photo = new PhotoModel({
        user_name: req.body.user_name,
        url: req.body.url,
        title: req.body.title,
        description: req.body.description
    })
    photo.save()
    .then((photo)=>{
        console.log('Foto guardado correctamente');
        console.log(photo);
        res.send(photo);
    })
    .catch((err)=>{
        console.log(err)
    })
}

function updateOne(req, res){
    console.log(req.body);

    PhotoModel.findOneAndUpdate(
        {
        title:req.body.title,
        },
        {$set: {description: req.body.description}
        }
        )
    .then((photo)=>{
        console.log('Foto acturalizado correctamente')
        res.send(photo);
    })
    .catch((err)=>{
        console.log(err);
    })
}

function deletePics(req, res){
    console.log(req.body);
    let user_name = req.body.user_name;
    let title = req.body.title;

    if(user_name && title){
        PhotoModel.deleteOne(
            {user_name:req.body.user_name,
             title:req.body.title
        })
        .then((photo)=>{
            console.log('Foto eliminado correctamente');
            res.send(photo);
        })
        .catch((err)=>{
            console.log(err);
        })
    } else if (user_name){
        PhotoModel.deleteMany(
            {user_name:req.body.user_name
        })
        .then((photo)=>{
            console.log('Foto eliminado correctamente');
            res.send(photo);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

function deleteAll(req, res){
    console.log(req.body);
    PhotoModel.deleteMany({user_name:req.body.user_name})
    .then((photo)=>{
        console.log('Foto eliminado correctamente');
        res.send(photo);
    })
    .catch((err)=>{
        console.log(err);
    })
}
     



module.exports = {
    getAllPics,
    uploadOne,
    updateOne,
    deletePics
}

