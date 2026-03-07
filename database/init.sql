CREATE TABLE menu(
 id SERIAL PRIMARY KEY,
 name TEXT,
 price INTEGER
);

INSERT INTO menu(name,price) VALUES
('Cappuccino',28000),
('Latte',30000),
('Croissant',22000);

CREATE TABLE orders(
 id SERIAL PRIMARY KEY,
 total INTEGER,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
