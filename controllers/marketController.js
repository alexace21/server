const router = require('express').Router();
const marketService = require('../services/marketService');

router.post('/', async (req, res) => {

    const newSubmit = req.body;
    console.log(newSubmit);


    try {
        const newOffer = await marketService.create(newSubmit);
        res.status(200).send(newOffer);
    } catch (error) {
        console.log(error)
        return res.status(401).send(error);
    }
});

router.get('/', async (req, res) => {
    const allOffers = await marketService.getAll().lean();

    res.status(200).send(allOffers);
});

router.post('/:productId', async (req, res) => {
    try {
        const deletedRecord = await marketService.del(req.params.productId);
        
        res.status(200).send(deletedRecord);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

module.exports = router;