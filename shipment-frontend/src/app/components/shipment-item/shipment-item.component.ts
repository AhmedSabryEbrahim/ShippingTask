import { Component, Input } from '@angular/core';
import { Shipment } from '../shipment';

@Component({
  selector: 'app-shipment-item',
  templateUrl: './shipment-item.component.html',
  styleUrls: ['./shipment-item.component.css']
})
export class ShipmentItemComponent {
  @Input() dataSource!: Shipment[];
  displayedColumns: string[] = ['parcelSKU', 'description', 'streetAdress', 'country', 'town', 'deliveryDate'];
}
