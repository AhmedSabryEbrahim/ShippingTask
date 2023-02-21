import { Injectable } from '@nestjs/common';
import { Shipment } from './shipments.entity';
import { ShipmentDto } from './shipment-dto';
import { SHIPMENTS } from './mock-shipments';

@Injectable()
export class ShipmentsService {

    private shipments: Shipment[] = SHIPMENTS;

    findAllShipments(): Shipment[]{
        return this.shipments;
    }

    findBySKU(sku: String): Shipment {
        return this.shipments.find(shipment => { shipment.parcelSKU === sku});
    }

    createShipment(shipmentDto: ShipmentDto): Shipment{
        const newShipment = {id: this.shipments.length + 1, ...shipmentDto};
        this.shipments.push(newShipment);
        return newShipment;
    }

}
