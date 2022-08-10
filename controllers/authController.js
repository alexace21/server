const router = require('express').Router();
const userService = require('../services/authService');
const { COOKIE_SESSION_NAME } = require('../config/environment');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    // if (password !== repeatPassword) {
    //     return res.status(400).send("Password mismatch!"), { error: 'Password mismatch!' };
    // }
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000/register')
    try {
        const newUser = await userService.create({email, password});
        const token = await userService.generateToken(newUser);
        res.json(newUser);

        
        res.status(200).send(newUser);

    } catch (err) {
        return res.status(400).send(err);
    }
})
module.exports = router;