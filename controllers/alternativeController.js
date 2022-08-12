const router = require('express').Router();

router.get('*', (req, res) => {
    res.status(404).send('Unexpected error!');
});

module.exports = router;
