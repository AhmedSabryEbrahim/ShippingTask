CREATE DATABASE IF NOT EXISTS dev;

USE dev;

CREATE USER 'app_user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%'  WITH GRANT OPTION;

DROP TABLE IF EXISTS shipment;

CREATE TABLE IF NOT EXISTS shipment (
    parcelSKU varchar(255) NOT NULL,
    description TEXT NOT NULL,
    streetAdress varchar(255) NOT NULL,
    country varchar(255) NOT NULL,
    state varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    deliveryDate DATE NOT NULL,
    UNIQUE(parcelSKU)
);