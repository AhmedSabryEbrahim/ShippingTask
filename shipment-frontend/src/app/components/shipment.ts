
export interface Shipment{
    id?: number;
    parcelSKU: string;
    description: string;
    streetAdress: string;
    country: string;
    town: string;
    deliveryDate: Date;
}