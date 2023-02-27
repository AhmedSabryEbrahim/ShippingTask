import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from '../entity/shipments.entity';
import { ShipmentDto } from '../shipment-dto';

@Injectable()
export class ShipmentsService {

    constructor(@InjectRepository(Shipment) private shipmentRepository: Repository<Shipment>) {
    }

    findAllShipments(): Promise<Shipment[]> {
        return this.shipmentRepository.find();
    }

    async findBySKU(parcelSKU: String): Promise<Shipment | undefined> {
        return this.shipmentRepository
            .createQueryBuilder("user")
            .where("user.username = :username", { parcelSKU: parcelSKU })
            .getOne();
    }

    createShipment(shipmentDto: ShipmentDto): Promise<Shipment> {
        return this.shipmentRepository.save(
            this.shipmentRepository.create(this.mapShipmentDto(shipmentDto))
        );
    }

    mapShipmentDto(shipmentDto: ShipmentDto): Shipment {
        const newShipment: Shipment = {
            parcelSKU: shipmentDto.parcelSKU,
            streetAdress: shipmentDto.streetAdress,
            description: shipmentDto.description,
            country: shipmentDto.country,
            state: shipmentDto.state,
            city: shipmentDto.city,
            deliveryDate: shipmentDto.deliveryDate
        };
        return newShipment;
    }

}
