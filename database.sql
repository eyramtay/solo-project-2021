
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "restaurants" (
    "id" SERIAL PRIMARY KEY,
    "restaurant_name" VARCHAR (50) NOT NULL,
    "cuisine" VARCHAR (50) NOT NULL,
    "restaurant_url" VARCHAR (120) NOT NULL,
    "restaurant_bio" TEXT NOT NULL,
    "users_id" INT REFERENCES "user" NOT NULL
);

-- starter Restaurants
INSERT INTO "restaurants" ("restaurant_name", "cuisine", "restaurant_url", "restaurant_bio")
VALUES
('Boludo', 'Argentinian', 'boludo.com', 'A taste of Buenos Aires in Minneapolis.' ),
('Chipotle', 'Mexican', 'chipotle.com', 'Chipotle, is an American chain of fast casual restaurants in the United States, United Kingdom, Canada, Germany, and France, specializing in tacos and Mission burritos that are made to order in front of the customer.'),
('Five Guys', 'American', 'fiveguys.com', 'Five Guys is an American fast casual restaurant chain focused on hamburgers, hot dogs, and French fries.');