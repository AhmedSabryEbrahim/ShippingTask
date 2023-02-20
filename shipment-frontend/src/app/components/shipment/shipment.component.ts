import { Component } from '@angular/core';
import { SHIPMENTS } from '../mock-shipments';
import { Shipment } from '../shipment';
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent {
  shipments: Shipment[] = SHIPMENTS;
}
