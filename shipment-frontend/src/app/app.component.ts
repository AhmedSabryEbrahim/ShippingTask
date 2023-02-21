import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Shipment } from './components/shipment';
import { ShippmentService } from './services/shippment.service';

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
    this.shipments = [...this.shipments, $event];
  }

  getShipments() {
    this.shipmentService.fetchAllShipments().subscribe((result)=>{
      this.shipments = result;
    });
  }

  ngOnInit(): void {
    this.getShipments();
  }
}
