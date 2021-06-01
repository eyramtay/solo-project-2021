const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT restaurant_name FROM "restaurants";';

  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting restaurants', error);
      res.sendStatus(500);
    });
  
});

router.get('/:id', (req, res) => {
  let restaurantId = req.params.id;
  console.log(`in GET restaurant by ID router. ID is ${restaurantId}`);

  const sqlQuery = 'SELECT * FROM restaurants WHERE id=$1;';

  pool.query(sqlQuery, [restaurantId])
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(error => {
      console.log(`Error making SQL query ${sqlQuery}:`, error);
      res.sendStatus(500);
    })
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
