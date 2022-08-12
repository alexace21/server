const router = require('express').Router();
const productService = require('../services/productService');

router.post('/', async (req, res) => {

    const newSubmit = req.body;
    console.log(newSubmit);


    try {
        const newProduct = await productService.create(newSubmit);
        res.status(200).send(newProduct);
    } catch (error) {
        console.log(error)
        return res.status(401).send(error);
    }

});

module.exports = router;
