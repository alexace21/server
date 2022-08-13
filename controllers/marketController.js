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

router.delete('/:offerId', async (req, res) => {
    try {
         const deletedRecord = await marketService.destroy(req.params.offerId);
         const newRecords = await marketService.getAll();
        res.status(200).send(newRecords);
    } catch (error) {
        console.log(error)
        res.status(402).send(error);
    }
});

router.put('/:offerId', async (req, res) => {
    try {
        const editRecord = await marketService.update(req.params.offerId, req.body);
        
        const updatedRecords = await marketService.getAll();
        res.status(200).send(updatedRecords);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

router.get('/:offerId', async (req, res) => {
    try {
         const wantedRecord = await marketService.getOne(req.params.offerId)
        res.status(200).send(wantedRecord);
    } catch (error) {
        console.log(error)
        res.status(402).send(error);
    }
});

module.exports = router;