import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/ormconfig';
import { ShipmentsController } from './shipments.controller';
import { Shipment } from './shipments.entity';
import { ShipmentsService } from './shipments.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Shipment])],
  controllers: [ShipmentsController],
  providers: [ShipmentsService]
})
export class ShipmentsModule {}
