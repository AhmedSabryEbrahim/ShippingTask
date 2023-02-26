import { Component, Input, OnInit } from '@angular/core';
import { Shipment } from './models/shipment';
import { ShippmentService } from './services/shipment-service/shippment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shipments: Shipment[] = [];
  @Input() dataSource!: Shipment[];

  constructor(private shipmentService:ShippmentService){}

  addShipmentRecordToTable($event: Shipment) {
    this.addShipments($event);
    this.shipments = [...this.shipments, $event];
  }

  getShipments() {
    this.shipmentService.fetchAllShipments().subscribe((result)=>{
      this.shipments = result;
    });
  }

  addShipments(newShipment:Shipment) {
    this.shipmentService.addNewShipment(newShipment).subscribe((result)=>{
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.getShipments();
  }
}
