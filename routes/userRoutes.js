const express = require('express');
const router = express.Router();

//load controllers
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

router.route('/').get().put().delete();
router.route('/signup').post();
router.route('/login').post();
router.route('/reset-password').post();

module.exports = router;
