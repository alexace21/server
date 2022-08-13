const Offer = require('../models/Offer');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/environment');

exports.create = (offerDetails) => Offer.create(offerDetails);
exports.getAll = () => Offer.find();
exports.destroy = (offerId) => Offer.findByIdAndDelete(offerId);
exports.update = (offerId, productData) => Offer.updateOne({ _id: offerId }, productData['data']);
exports.getOne = (offerId) => Offer.findById(offerId);

