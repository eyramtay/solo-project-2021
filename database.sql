
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
    "users_id" INT REFERENCES "user" NOT NULL
);