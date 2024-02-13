 mongosh "mongodb+srv://naomukai:STGG0f3zjWIrLJT8@cluster0.vqow74u.mongodb.net/?retryWrites=true&w=majority"

use dia1RetoOpcional

show collections

-Buscar un documento por alguno de sus campos
db.profile.find({name: "Hanako"})

-Buscar un documento y proyectar sólo un campo
db.profile.findOne({_id: ObjectId("65cb408e420b1ba0d628d26a")}, {_id:0, name:1})

-Modificar un documento por su id
https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/ (solo un dato)
https://www.mongodb.com/docs/manual/reference/operator/aggregation/replaceWith/#mongodb-pipeline-pipe.-replaceWith  (para algunos datos)
db.profile.findOneAndUpdate({_id: ObjectId("65cb408e420b1ba0d628d26a")},{$set:{surname:"Takemoto", comments:"newbie" }})

db.profile.find({_id: ObjectId("65cb408e420b1ba0d628d26a")})

-Modificar un documento por alguno de sus campos
db.profile.findOneAndUpdate({name:"Hideto"},{$set:{comments:"UX/UD disginer"}}) 

db.profile.find({name:"Hideto"})

-Eliminar un documento por su id
https://www.mongodb.com/docs/manual/reference/delete-methods/

db.workingHour.deleteOne({"_id":ObjectId("65cb4fa6420b1ba0d628d2a1")})

- Modificar un documento y si no existe debe crearse (upsert opt-in)
https://www.mongodb.com/docs/manual/reference/method/Bulk.find.upsert/
https://www.baeldung.com/mongodb-upsert
db.workingHour.findAndModify({query: { place: "Canarias/Spain" },update: {$set: { workStartTime: "07:00", workEndTime: "16:00" }},upsert: true,new: true})

db.workingHour.updateOne({place: "Las Palmas/Spain"},{$set:{workStartTime: "07:00", workEndTime: "16:00" }},{upsert: true})

- Modificar más de un documento (multi opt-in)
https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/
db.workingHour.updateMany({workStartTime: "07:00"},{$set:{workStartTime:"07:30"}})

- Eliminar todos los documentos
https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/
 db.workingHour.deleteMany({workStartTime:"07:30"})
db.workingHour.deleteMany({})



