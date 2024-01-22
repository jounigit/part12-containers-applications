const express = require('express');
const redis = require('../redis');
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  redis.setAsync("added_todos", visits)
  let addedTodos = await redis.getAsync("added_todos") || '0'
  console.log('Redis get: ', addedTodos)

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  let visits = await redis.getAsync("added_todos") || 0

  res.json({ "added_todos": Number(visits) })
})

module.exports = router;
