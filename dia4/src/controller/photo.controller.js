const PhotoModel = require('../model/photo')


function getAllPics(req, res){
    if(req.query.id == null){
        PhotoModel.find({})
        .then((photo) =>{
            console.log(photo);
            res.send(photo)
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1);
        })
    } else {
        PhotoModel.findById(req.query.id)
        .then((photo)=>{
            console.log(photo);
            res.send(photo);
        })
        .catch((err)=>{
            console.log(err);
            process.exit(-1)
        })
    }
}

function savePics(req, res){
    console.log(req.body);

    let foto = new PhotoModel({
        user_name: req.body.name,
        url: req.body.url,
        title: req.body.title,
        description: req.body.description
    })
    foto.save()
    .then((photo)=>{
        console.log('Foto guardado correctamente');
        console.log(photo);
        res.send(photo);
    })
    .catch((err)=>{
        console.log(err)
    })
}

function editPics(req, res){
    console.log(req.body);

    PhotoModel.findByIdAndUpdate(req.body.id,
        {user_name: req.body.name,
        url:req.body.url,
        title:req.body.title,
        description:req.body.description
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

function deleteOnePics(req, res){
    console.log(req.body);
    PhotoModel.deleteOne({user_name})
    .then((photo)=>{
        console.log('Foto eliminado correctamente');
        res.send(photo);
    })
    .catch((err)=>{
        console.log(err);
    })
}

function deleteAllPics(req, res){
    console.log(req.body);
    PhotoModel.deleteAll({user_name})
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
    savePics,
    editPics,
    deleteOnePics,
    deleteAllPics
}

