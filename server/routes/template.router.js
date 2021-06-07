const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM restaurants ORDER BY "restaurant_name" ASC;`;

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

  const sqlQuery = `SELECT * FROM restaurants WHERE id=$1;`;

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

router.get('/', (req, res) => {
  let sqlText = `SELECT * FROM restaurants where id >= (
    SELECT random()*(max(id)-min(id))+min(id) FROM restaurants
  )
  ORDER BY id
  LIMIT 1;`;

  pool.query(sqlText)
  .then((result) => {
      console.log(sqlText);
      res.send(result.rows[0]);
  })
  .catch((err) => {
      console.log('ERROR fetching random', err);
      res.sendStatus(500)
  })
})

// PUT / edit/update route
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const restaurant_name = req.body.restaurant_name;
  const cuisine = req.body.cuisine;
  const restURL = req.body.restaurant_url;
  const rest_bio = req.body.restaurant_bio;
  console.log(`In PUT/edit restaurant by ID. ID is ${id}`);

  let sqlQuery = `UPDATE "restaurants" SET restaurant_name=$2, cuisine=$3, 
  restaurant_url=$4, restaurant_bio=$5 WHERE id=$1;`;

  pool.query(sqlQuery, [id, restaurant_name, cuisine, restURL, rest_bio])
    .then(response => {
      res.send(response.rows)
    })
    .catch(error => {
      console.log(`Error making PUT request for ${id}: ${error}`);
      res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);

  // Returning "id" will give us back the id of the newly created entry
  const addRestaurantQuery = `
  INSERT INTO "restaurants" ("restaurant_name", "cuisine", "restaurant_url", "restaurant_bio")
  VALUES ($1, $2, $3, $4)
  RETURNING "id"
  ;`;

  pool.query(addRestaurantQuery, [req.body.restaurant_name, req.body.cuisine, 
    req.body.restaurant_url, req.body.restaurant_bio])
    .then(result => {
      console.log('Newly added restaurant ID:', result.rows[0].id); // ID is here
      
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${addRestaurantQuery}`, error);
      res.sendStatus(500);
    })
});

module.exports = router;
