CREATE DATABASE IF NOT EXISTS dev;

USE dev;

CREATE USER 'app_user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'app_user'@'%'  WITH GRANT OPTION;

DROP TABLE IF EXISTS shipment;

CREATE TABLE IF NOT EXISTS shipment (
    parcelSKU varchar(255),
    description TEXT,
    streetAdress varchar(255),
    country varchar(255),
    town varchar(255),
    deliveryDate DATE
);

INSERT INTO shipment
(parcelSKU, description, streetAdress, country, town, deliveryDate) 
VALUES 
('00422001','This shipment should be arrived to the person name: Ahmed, time:','Old town - Tallinn',
'Estonia', 'Tallinn', STR_TO_DATE('20,01,2023','%d,%m,%Y'));

INSERT INTO shipment
(parcelSKU, description, streetAdress, country, town, deliveryDate) 
VALUES 
('00422002','This shipment should be arrived to the person name: Ahmed, time:','Old town - Tallinn',
'Estonia', 'Tallinn', STR_TO_DATE('20,01,2023','%d,%m,%Y'));

INSERT INTO shipment
(parcelSKU, description, streetAdress, country, town, deliveryDate) 
VALUES 
('00422003','This shipment should be arrived to the person name: Ahmed, time:','Old town - Tallinn',
'Estonia', 'Tallinn', STR_TO_DATE('20,01,2023','%d,%m,%Y'));