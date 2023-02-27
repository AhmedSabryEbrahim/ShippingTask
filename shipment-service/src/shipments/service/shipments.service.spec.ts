import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Shipment } from '../entity/shipments.entity';
import { ShipmentsService } from './shipments.service';

describe('ShipmentsService', () => {
  let service: ShipmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [Repository<Shipment>],
      providers: [ShipmentsService],
    }).compile();

    service = module.get<ShipmentsService>(ShipmentsService);
  });

  it('should be defined', () => {
  });
});
