const productService = require('../services/productService');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const allProducts = await productService.getAll();

    res.status(200).send(allProducts);
});


module.exports = router;