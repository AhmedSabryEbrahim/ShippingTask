import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
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
            .createQueryBuilder("shipment")
            .where("shipment.parcelSKU = :parcelSKU", { parcelSKU: parcelSKU })
            .getOne();
    }

    async createShipment(shipmentDto: ShipmentDto): Promise<Shipment> {
        const shipment = await this.findBySKU(shipmentDto.parcelSKU);
        if (!shipment) {
            return this.shipmentRepository.save(
                this.shipmentRepository.create(this.mapShipmentDto(shipmentDto))
            );
        }else{
            throw new ConflictException("parcelSKU already exists!");
        }
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
