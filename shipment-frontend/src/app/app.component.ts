import { AfterViewInit, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormComponent } from './components/form/form.component';
import { Shipment } from './models/shipment';
import { ShippmentService } from './services/shipment-service/shippment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  dataSource: MatTableDataSource<Shipment> = new MatTableDataSource<Shipment>();
  matDialogRef!: MatDialogRef<any>;

  constructor(private shipmentService: ShippmentService, private matDialog: MatDialog) { }

  openDialog() {
    this.matDialogRef = this.matDialog.open(FormComponent);
    this.matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addShipmentRecordToTable(result);
      }
    });
  }

  addShipmentRecordToTable($event: Shipment) {
    this.shipmentService.addNewShipment($event).subscribe((result) => {
      console.log(result);
      this.dataSource.data.push(result);
      this.dataSource.data = [...this.dataSource.data]
      this.dataSource._updateChangeSubscription();
    });
  }

  getShipments() {
    this.shipmentService.fetchAllShipments().subscribe((result) => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.getShipments();
  }
}
