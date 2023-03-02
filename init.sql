CREATE DATABASE IF NOT EXISTS dev;

USE dev;

CREATE USER 'app_user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%'  WITH GRANT OPTION;

DROP TABLE IF EXISTS shipment;


-- the validations and constraints will be visible in the app
-- CREATE TABLE IF NOT EXISTS shipment (
--     parcelSKU varchar(255) NOT NULL,
--     description TEXT NOT NULL,
--     streetAdress varchar(255) NOT NULL,
--     country varchar(255) NOT NULL,
--     state varchar(255) NOT NULL,
--     city varchar(255) NOT NULL,
--     deliveryDate DATE NOT NULL,
--     UNIQUE(parcelSKU)
-- );

CREATE TABLE IF NOT EXISTS shipment (
    parcelSKU varchar(255) ,
    description TEXT ,
    streetAdress varchar(255) ,
    country varchar(255) ,
    state varchar(255) ,
    city varchar(255) ,
    deliveryDate DATE 
);