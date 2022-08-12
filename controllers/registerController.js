const router = require('express').Router();
const userService = require('../services/authService');
const { COOKIE_SESSION_NAME } = require('../config/environment');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    // if (password !== repeatPassword) {
    //     return res.status(400).send("Password mismatch!"), { error: 'Password mismatch!' };
    // }

    res.set('Access-Control-Allow-Origin', '*');
    res.header({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    })

    try {
        const newUser = await userService.create({ email, password });
        const token = await userService.generateToken(newUser);
        

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.status(200).send(newUser);

    } catch (err) {
        console.log(err)
        return res.status(401).send(err);
    }
});

module.exports = router;