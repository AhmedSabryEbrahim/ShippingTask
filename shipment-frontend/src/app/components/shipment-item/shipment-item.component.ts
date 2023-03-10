import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Shipment } from 'src/app/models/shipment';
import { CdkColumnDef } from '@angular/cdk/table';

@Component({
  selector: 'app-shipment-item',
  templateUrl: './shipment-item.component.html',
  styleUrls: ['./shipment-item.component.css']
})
export class ShipmentItemComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() dataSource!: MatTableDataSource<Shipment>;
  countrySearchText: string= '';

  displayedColumns: string[] = ['parcelSKU', 'description', 'streetAdress', 'country', 'state', 'city', 'deliveryDate'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.dataSource._updateChangeSubscription();
  }

  onCountrySearchChanged() {
     console.log(this.countrySearchText);
     this.dataSource.filter = this.countrySearchText.toLocaleLowerCase();
  }

}
