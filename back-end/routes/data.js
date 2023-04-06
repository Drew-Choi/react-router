/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require('../controllers/dataController');

router.post('/setData', setData);

router.get('/getData', getData);

router.get('/getCounts', getCounts);

router.post('/incCounts', incCounts);

module.exports = router;
