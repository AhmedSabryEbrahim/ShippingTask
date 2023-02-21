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
    getAllShipments(): Shipment[]{
        return this.shipmentService.findAllShipments();
    }

    @Get(':id')
    getShipmentId(@Param('sku') sku:String): Shipment{
        return this.shipmentService.findBySKU(sku);
    }

    @Post()
    createShipment(@Body() shipmentDto:ShipmentDto): Shipment{
        return this.shipmentService.createShipment(shipmentDto);
    }

}
