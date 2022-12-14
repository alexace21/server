const router = require('express').Router();
const userService = require('../services/authService');
const { COOKIE_SESSION_NAME } = require('../config/environment');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userService.login(email, password);
        const token = await userService.generateToken(user);

        res.status(200).send(user);
    } catch (error) {
        return res.status(401).send(error);
    }
});

module.exports = router;