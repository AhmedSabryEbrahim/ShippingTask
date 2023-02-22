import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Shipment } from './shipments.entity';
import { ShipmentDto } from './shipment-dto';
import {ShipmentsService} from './shipments.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Shipments')
@Controller('shipments')
export class ShipmentsController {

    constructor(private shipmentService: ShipmentsService){}

    @Get()
    async getAllShipments(): Promise<Shipment[]>{
        return this.shipmentService.findAllShipments();
    }

    @Get(':sku')
    getShipmentId(@Param('sku') sku:String): Promise<Shipment>{
        return this.shipmentService.findBySKU(sku);
    }

    @Post()
    createShipment(@Body() shipmentDto:ShipmentDto): Promise<Shipment>{
        return this.shipmentService.createShipment(shipmentDto);
    }

}
