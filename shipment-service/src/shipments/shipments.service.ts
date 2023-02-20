import { Injectable } from '@nestjs/common';
import { Shipment } from './shipments.entity';
import { ShipmentDto } from './shipment-dto';

@Injectable()
export class ShipmentsService {

    private shipments: Shipment[] = [];

    findAllShipments(): Shipment[]{
        return this.shipments;
    }

    findById(shipmentId: number): Shipment {
        return this.shipments.find(shipment => { shipment.id === shipmentId});
    }

    createShipment(shipmentDto: ShipmentDto): Shipment{
        const newShipment = {id: this.shipments.length + 1, ...shipmentDto};
        this.shipments.push(newShipment);
        return newShipment;
    }

}
