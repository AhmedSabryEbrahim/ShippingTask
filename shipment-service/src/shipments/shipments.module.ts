import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/ormconfig';
import { Shipment } from 'src/config/typeorm.entities';
import { ShipmentsController } from './controller/shipments.controller';
import { ShipmentsService } from './service/shipments.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Shipment])],
  controllers: [ShipmentsController],
  providers: [ShipmentsService]
})
export class ShipmentsModule {}
