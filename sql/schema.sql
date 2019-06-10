CREATE TABLE restaurants(
    id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR,
    restaurant_address VARCHAR,
    phone_num VARCHAR
);

INSERT INTO restaurants
    (restaurant_name, restaurant_address, phone_num)
VALUES
    ('Lovies', '3420 Piedmont Rd NE Buckhead', '(404) 254-2848'),
    ('Farm Burger', '3365 Piedmont Rd NE Buckhead', '(404) 816-0603'),
    ('Twin Peaks', '3365 Piedmont Rd NE, Atlanta, GA 30305', '(404) 961-8946');

CREATE TABLE reviews(
    id SERIAL,
    review TEXT,
    stars INT,
    restaurant_id INT REFERENCES restaurants(id),
    PRIMARY KEY(id)
);

INSERT INTO reviews
    (review, stars, restaurant_id)
VALUES
    ('Amazing BBQ', 5, 1),
    ('Overall good food', 5, 1),
    ('Disgusting', 1, 1),
    ('Great burgers', 4, 1),
    ('highly recommend', 4, 2),
    ('Awesome place', 5, 2),
    ('Love this place', 5, 3);