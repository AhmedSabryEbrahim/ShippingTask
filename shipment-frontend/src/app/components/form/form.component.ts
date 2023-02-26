import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Shipment } from 'src/app/models/shipment';
import { CountrySelectorComponent } from '../country-selector/country-selector.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @Output() shipmentForm!: FormGroup;
  @Output() submitEventEmitter = new EventEmitter<Shipment>();
  locationForm: any;

  submitInfo(): void{
    this.submitEventEmitter.emit(this.buildShipmentObj());
    this.initShippmentForm();
  }

  buildShipmentObj(): Shipment{
    this.shipmentForm.value.location = this.locationForm;
    const newShipment: Shipment = this.shipmentForm.value;
    newShipment.country = this.locationForm.country;
    newShipment.state = this.locationForm.state;
    newShipment.city = this.locationForm.city;
    return newShipment;
  }
  
  ngOnInit(): void {
    this.initShippmentForm();
  }

  initShippmentForm(){
    this.shipmentForm = new FormGroup({
      parcelSKU: new FormControl(''),
      streetAdress: new FormControl(''),
      location: CountrySelectorComponent.locationFormInit(),
      description: new FormControl(''),
      deliveryDate: new FormControl('')
    })  
  }

  get locForm(): FormGroup {
    return this.shipmentForm.get('location') as FormGroup;
  }

  formOnAction($event: any){
    this.locationForm = $event;
  }
}
