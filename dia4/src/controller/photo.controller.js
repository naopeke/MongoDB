function getUser(req, res){
    if(req.query.id == null){
        PhotoModel.find({})
        .then( (user) =>{
            console.log(user);
            res.send(user)
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1);
        })
    } else {
        PhotoModel.findById(req.query.id)
        .then((user)=>{
            console.log(user);
            res.send(user);
        })
        .catch((err)=>{
            console.log(err);
            process.exit(-1)
        })
    }
}