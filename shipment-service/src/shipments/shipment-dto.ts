import { ApiProperty } from "@nestjs/swagger";

export class ShipmentDto{

    @ApiProperty({default: '00422001', required: true})
    parcelSKU: string;

    @ApiProperty({default: 'This shipment should be arrived to the person name: Ahmed, time: ', required: true})
    description: string;

    @ApiProperty({default: 'Old town - Tallinn', required: true})
    streetAdress: string;


    @ApiProperty({default: 'Estonia', required: true})
    country: string;

    @ApiProperty({default: 'Tallinn', required: true})
    town: string;

    @ApiProperty({default: '20/01/2023', required: true})
    deliveryDate: Date;
}