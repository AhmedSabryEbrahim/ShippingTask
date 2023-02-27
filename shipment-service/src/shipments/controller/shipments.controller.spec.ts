import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Shipment } from '../entity/shipments.entity';
import { ShipmentsService } from '../service/shipments.service';
import { ShipmentDto } from '../shipment-dto';
import { ShipmentsController } from './shipments.controller';

describe('ShipmentsController', () => {
  let controller: ShipmentsController;

  const shipmentDto: ShipmentDto = {
    parcelSKU: '00422001',
    description: 'This shipment should be arrived to the person name: Ahmed, time:',
    streetAdress: 'Old town - Tallinn',
    country: 'Estonia',
    state: 'Tallinn',
    city: 'Tallinn',
    deliveryDate: new Date('20/01/2023')
  };

  const shipmentObj: Shipment[] = [{
    parcelSKU: '00422001',
    description: 'This shipment should be arrived to the person name: Ahmed, time:',
    streetAdress: 'Old town - Tallinn',
    country: 'Estonia',
    state: 'Tallinn',
    city: 'Tallinn',
    deliveryDate: new Date('20/01/2023')
  }];


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentsController],
      providers: [ShipmentsService,],
    }).compile();

    controller = module.get<ShipmentsController>(ShipmentsController);
  });

  it('should be defined', () => {
    controller.createShipment(shipmentDto);
    expect(controller.getAllShipments()).toEqual(shipmentObj);
  });
});
