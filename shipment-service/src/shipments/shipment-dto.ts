import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, MinDate, Validate } from "class-validator";
import { Transform, Type } from 'class-transformer';
import { Unique } from "typeorm";
import { Shipment } from "./entity/shipments.entity";

export class ShipmentDto {

    @ApiProperty({ default: '00422001', required: true })
    @Validate(Unique, [Shipment])
    @IsNotEmpty({ message: "parcelSKU should be valid and not empty." })
    parcelSKU: string;

    @ApiProperty({ default: 'This shipment should be arrived to the person name: Ahmed, time: ', required: true })
    @Validate(Unique, [Shipment])
    @IsNotEmpty({ message: "parcelSKU should be valid and not empty." })
    description: string;

    @ApiProperty({ default: 'Old town - Tallinn', required: true })
    streetAdress: string;

    @ApiProperty({ default: 'Estonia', required: true })
    country: string;

    @ApiProperty({ default: 'Tallinn', required: true })
    state: string;

    @ApiProperty({ default: 'Tallinn', required: true })
    city: string;

    @ApiProperty({ default: '2023-03-13', required: false })
    @Transform(({ value }) => toDate(value))
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    deliveryDate?: Date;
}

export function toDate(value: string): Date {
    return new Date(value);
}