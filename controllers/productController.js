const router = require('express').Router();
const productService = require('../services/productService');

router.get('/:productId', async(req, res) => {
    try {
        const foundRecord = await productService.getOne(req.params.productId);
        console.log(foundRecord);

        res.status(200).send(foundRecord);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

router.put('/:productId', async (req, res) => {
    try {
        const updatedRecord = await productService.update(req.params.productId, req.body);
        
        res.status(200).send(updatedRecord);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

module.exports = router;
