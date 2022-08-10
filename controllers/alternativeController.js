const router = require('express').Router();

router.get('*', (req, res) => {
    res.send(res.status(404));
});

module.exports = router;
