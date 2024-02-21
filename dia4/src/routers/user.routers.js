const { Router } = require ('express');
const router = Router();
const photoCtrl = require('../controller/photo.controller');


router.get('/photos', photoCtrl.getAllPics);

router.post('/photos', photoCtrl.savePics);

router.put('/photos', photoCtrl.editPics);

router.delete('/books', bookCtrl.deleteOnePics);
router.delete('/books', bookCtrl.deleteAllPics);

module.exports = router;