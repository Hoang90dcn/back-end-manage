const express = require('express');
const router = express.Router();
const  product = require('../controller/ProductController')

router.post('/create',product.create);
router.get('/',product.index);


module.exports = router;
