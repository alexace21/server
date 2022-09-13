const router = require('express').Router();
const userService = require('../services/authService');

router.get('/', async (req, res) => {
    const allUsers = await userService.getAll().lean();

    res.status(200).send(allUsers);
});

router.put('/:userId', async (req, res) => {
    try {
        const updatedRecord = await userService.update(req.params.userId, req.body);
        
        res.status(200).send(updatedRecord);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const foundRecord = await userService.getOne(req.params.userId);
        console.log(foundRecord);

        res.status(200).send(foundRecord);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})

router.get('/:userId/:productId', async (req, res) => {
    try {
        const foundRecord = await userService.getOne(req.params.userId);
        console.log(foundRecord);
        console.log(req.params.productId)
        console.log(req.params.userId)

        foundRecord.collections.push(req.params.productId);
        console.log(foundRecord)

        res.status(200).send(foundRecord);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
})


module.exports = router;