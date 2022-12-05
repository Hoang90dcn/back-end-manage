const express = require('express');
const router = express.Router();
const  product = require('../controller/ProductController')
const multer = require('multer');
const storage = require('../service/handleUploadFile');
const upload = multer({ storage: storage })

router.post('/create',upload.single('image2'),product.create);
router.get('/delete',product.delete);
router.get('/',product.index);


module.exports = router;
