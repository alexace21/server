const Offer = require('../models/Offer');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/environment');

exports.create = (offerDetails) => Offer.create(offerDetails);
exports.getAll = () => Offer.find();
exports.del = (offerId) => Offer.findByIdAndDelete(offerId);