import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Shipment } from 'src/app/models/shipment';
import { CountrySelectorComponent } from '../country-selector/country-selector.component';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() shipmentForm!: FormGroup;
  locationForm: any;

  constructor(private dialogRef: MatDialogRef<any>) { }


  submitInfo(): void {
    const shipment = this.buildShipmentObj();
    if (this.isValidateFormInput()) {
      this.dialogRef.close(shipment);
      this.initShippmentForm();
    }
  }

  buildShipmentObj(): Shipment {
    this.shipmentForm.value.location = this.locationForm;
    const newShipment: Shipment = this.shipmentForm.value;
    if (this.locationForm && this.locationForm.country
      && this.locationForm.state && this.locationForm.city) {
      newShipment.country = this.locationForm.country;
      newShipment.state = this.locationForm.state;
      newShipment.city = this.locationForm.city;
    } else {
      console.log("Location info (country, state, city) not correct!");
    }
    return newShipment;
  }

  ngOnInit(): void {
    this.initShippmentForm();
  }

  initShippmentForm() {
    this.shipmentForm = new FormGroup({
      parcelSKU: new FormControl('', [Validators.required]),
      streetAdress: new FormControl('', [Validators.required]),
      location: CountrySelectorComponent.locationFormInit(),
      description: new FormControl('', [Validators.required]),
      deliveryDate: new FormControl('', [Validators.required])
    })
  }

  get locForm(): FormGroup {
    return this.shipmentForm.get('location') as FormGroup;
  }

  formOnAction($event: any) {
    this.locationForm = $event;
  }


  isValidateFormInput(): boolean {
    const isValid = this.validateParcelSKUInput(this.shipmentForm.value.parcelSKU) &&
      this.validateAddressInput(this.shipmentForm.value.address) &&
      this.validateCountryInput(this.shipmentForm.value.country) &&
      this.validateStateInput(this.shipmentForm.value.state) &&
      this.validateCityInput(this.shipmentForm.value.city) &&
      this.validateDelieveryDateInput(this.shipmentForm.value.deliveryDate);
    return isValid;

  }

  getErrorMessage(): string {
    return 'You must enter a value';
  }

  validateParcelSKUInput(parcelSKU: string): boolean {
    return (this.shipmentForm.value.parcelSKU) ? true : false;
  }
  validateDescriptionInput(description: string): boolean {
    return (this.shipmentForm.value.description) ? true : false;
  }
  validateAddressInput(address: string): boolean {
    return (address) ? true : false;
  }
  validateCountryInput(country: string): boolean {
    return (country) ? true : false;
  }
  validateStateInput(state: string): boolean {
    return (state) ? true : false;
  }
  validateCityInput(city: string): boolean {
    return (city) ? true : false;
  }
  validateDelieveryDateInput(deliveryDate: string): boolean {
    return (deliveryDate) ? true : false;
  }

}
