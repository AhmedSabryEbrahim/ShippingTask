import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Shipment } from '../entity/shipments.entity';
import { ShipmentsService } from '../service/shipments.service';
import { ShipmentDto } from '../shipment-dto';

@ApiTags('Shipments')
@Controller('shipments')
export class ShipmentsController {

    constructor(private shipmentService: ShipmentsService){}

    @Get()
    getAllShipments(): Promise<Shipment[]>{
        return this.shipmentService.findAllShipments();
    }

    @Get(':sku')
    getShipmentId(@Param('sku') sku:String): Promise<Shipment>{
        return this.shipmentService.findBySKU(sku);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createShipment(@Body() shipmentDto:ShipmentDto): Promise<Shipment>{
        return this.shipmentService.createShipment(shipmentDto);
    }

}
