import { Component, OnInit, Output } from '@angular/core';
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
    const isValid = this.validateParcelSKUInput() &&
      this.validateDescriptionInput() &&
      this.validateAddressInput() &&
      this.validateCountryInput() &&
      this.validateStateInput() &&
      this.validateCityInput() &&
      this.validateDelieveryDateInput();
    console.log("is valid ? ", isValid);
    return isValid;

  }

  getErrorMessage(): string {
    return 'You must enter a value';
  }

  validateParcelSKUInput(): boolean {
    const isValidParcelSKU = (this.shipmentForm.value.parcelSKU) ? true : false;
    console.log("parcelSku ", this.shipmentForm.value.parcelSKU, " ", isValidParcelSKU);
    return isValidParcelSKU;
  }
  validateDescriptionInput(): boolean {
    const isValidDescription = (this.shipmentForm.value.description) ? true : false;
    console.log("Description ", this.shipmentForm.value.description, " ", isValidDescription);
    return isValidDescription;
  }
  validateAddressInput(): boolean {
    const isValidAddress = (this.shipmentForm.value.streetAdress) ? true : false;
    console.log("Address ", this.shipmentForm.value.streetAdress, " ", isValidAddress);
    return isValidAddress;
  }
  validateCountryInput(): boolean {
    const isValidCountry = (this.shipmentForm.value.country) ? true : false;
    console.log("country ", this.shipmentForm.value.country, " ", isValidCountry);
    return isValidCountry;
  }
  validateStateInput(): boolean {
    const isValidState= (this.shipmentForm.value.state) ? true : false;
    console.log("state ", this.shipmentForm.value.state, " ", isValidState);
    return isValidState;
  }
  validateCityInput(): boolean {
    const isValidCity= (this.shipmentForm.value.city) ? true : false;
    console.log("city ", this.shipmentForm.value.city, " ", isValidCity);
    return isValidCity;
  }
  validateDelieveryDateInput(): boolean {
    const isValidDate =  (this.shipmentForm.value.deliveryDate) ? true : false;
    console.log("DelivaryDate ", this.shipmentForm.value.deliveryDate, " ", isValidDate);
    return isValidDate;
  }

}
