const express = require('express');
const redis = require('../redis');
const router = express.Router();

const configs = require('../util/config')

// let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  let visits = await redis.getAsync("visits") || '0'
  visits++
  redis.setAsync("visits", visits)
  console.log('Redis get: ', visits)

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  let visits = await redis.getAsync("visits") || 0

  res.json({ "added_todos": Number(visits) })
})

module.exports = router;

// let addedTodos = await redis.getAsync("visits") || '0'
// visits++
// redis.setAsync("visits", visits+addedTodos)
// console.log('Redis get: ', addedTodos)
