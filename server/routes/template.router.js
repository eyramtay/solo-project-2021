const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);

  // Returning "id" will give us back the id of the newly created entry
  const addRestaurantQuery = `
  INSERT INTO "restaurants" ("restaurant_name", "cuisine", "restaurant_url")
  VALUES ($1, $2, $3)
  ;`


  pool.query(addRestaurantQuery, [req.body.restaurant_name, req.body.cuisine, req.body.restaurant_url])
    .then(result => {
      console.log('Newly added restaurant ID:'); //result.rows[0].id); // ID is here
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${addRestaurantQuery}`, error);
      res.sendStatus(500);
    })
});

module.exports = router;
