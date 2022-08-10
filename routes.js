const router = require('express').Router();

const homeController = require('./controllers/homeController');
const marketController = require('./controllers/marketController');
const authController = require('./controllers/authController');
const alternativeController = require('./controllers/alternativeController');

router.use(homeController);
router.use('/market', marketController);
router.use(['/login', '/register', '/logout'], authController);
router.use('*', alternativeController);

module.exports = router;
