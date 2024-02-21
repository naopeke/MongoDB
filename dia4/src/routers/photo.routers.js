const { Router } = require ('express');
const router = Router();
const photoCtrl = require('../controller/photo.controller');


router.get('/photos', photoCtrl.getAllPics);

router.post('/photos', photoCtrl.uploadOne);

router.put('/photos', photoCtrl.updateOne);

router.delete('/photos', photoCtrl.deletePics);

module.exports = router;