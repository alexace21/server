const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/environment');

exports.create = (productData) => Product.create(productData);

exports.getOne = (productId) => Product.findById(productId);

exports.update = (productId, productData) => Product.updateOne({ _id: productId }, productData['data']);