import requests
from datetime import timedelta, date
from random import *


url = "http://backend:3000/Shipments"
num_shipments = 1000
parcelSKU = 422001
locations = [{"country": "Egypt", "state": "Cairo", "city": "Cairo"},
             {"country": "Estonia", "state": "Tallinn", "city": "Tallinn"},
             {"country": "Egypt", "state": "Cairo", "city": "Giza"},
             {"country": "England", "state": "Manchester", "city": "Manchester"},
             {"country": "England", "state": "London", "city": "London"},
             {"country": "Estonia", "state": "Tartu", "city": "Tartu"},
             {"country": "Estonia", "state": "Parnu", "city": "Parnu"},
             ]


def get_shipment(parcelSKU, location, delivery_date):

    return {
        "parcelSKU": parcelSKU,
        "description": "This shipment should be arrived to the person name: Ahmed, time: ",
        "streetAdress": location.get("country") + "/" + location.get("state") + "/" + location.get("city"),
        "country": location.get("country"),
        "state": location.get("state"),
        "city": location.get("city"),
        "deliveryDate": delivery_date
    }


for x in range(num_shipments):

    delivery_date = str(date.today() + timedelta(days=(randint(1, len(locations)) * 5)))
    print(delivery_date)
    location = locations[randint(0, len(locations)) - 1]

    shipment = get_shipment(
        parcelSKU + x,
        location,
        delivery_date
    )

    print(requests.post(url, json=shipment).text)
