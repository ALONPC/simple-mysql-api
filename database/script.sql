DROP DATABASE IF EXISTS mysql_api;
CREATE DATABASE mysql_api;

USE mysql_api;

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    pass VARCHAR(50) NOT NULL
);

DESCRIBE users;

INSERT INTO users (name, email, pass) VALUES 
("Admin", "admin@ecommerce.com", "123"), 
("User1", "user1@ecommerce.com", "1234"),
("User2", "user2@ecommerce.com", "12345");


