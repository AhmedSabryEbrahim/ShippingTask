import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Shipment{
    @PrimaryColumn()
    parcelSKU: string;
    @Column()
    description: string;
    @Column()
    streetAdress: string;
    @Column()
    country: string;
    @Column()
    town: string;
    @Column()
    deliveryDate: Date;
}