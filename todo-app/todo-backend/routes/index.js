const express = require('express');
const redis = require('../redis');
const router = express.Router();

const configs = require('../util/config')
console.log('CONFIG: ', configs)

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
