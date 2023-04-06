/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const { setData } = require('../controllers/dataController');

router.post('/setdata', setData);

module.exports = router;
