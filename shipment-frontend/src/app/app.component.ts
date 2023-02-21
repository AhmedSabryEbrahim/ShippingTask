import { Component, Input } from '@angular/core';
import { SHIPMENTS } from './components/mock-shipments';
import { Shipment } from './components/shipment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shipments: Shipment[] = SHIPMENTS;
  @Input() dataSource!: Shipment[];

  addShipmentRecordToTable($event:Shipment){
    console.log($event)
    this.shipments = [...this.shipments, $event];
  }
}
