const router = require('express').Router();

const userController = require('./controllers/userController');
const registerController = require('./controllers/registerController');
const loginController = require('./controllers/loginController');
const marketController = require('./controllers/marketController');
const createOfferController = require('./controllers/createOfferController');
const productController = require('./controllers/productController');
const alternativeController = require('./controllers/alternativeController');
const catalogController = require('./controllers/catalogController');

router.use('/users', userController);
router.use('/register', registerController); // works
router.use('/login', loginController); // works
router.use('/market', marketController);
router.use('/create', createOfferController);
router.use('/product-details', productController);
router.use('/catalog', catalogController);
router.use('*', alternativeController);


module.exports = router;
