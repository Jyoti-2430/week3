const express = require('express');
const{singnup,singin} = require('../controllers/authController');

const router = express.Router();

router.post('/signup',singnup);//register
router.post('/signin',singin);//login

module.exports = router;