import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Shipment } from 'src/app/models/shipment';
import { CountrySelectorComponent } from '../country-selector/country-selector.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ShippmentService } from 'src/app/services/shipment-service/shippment.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() shipmentForm!: FormGroup;
  locationForm: any;
  submitErrors: String = '';

  constructor(private shipmentService: ShippmentService, private dialogRef: MatDialogRef<any>) { }


  submitInfo(): void {
    this.submitErrors = '';
    const shipment = this.buildShipmentObj();
    if (this.isValidateFormInput()) {
      this.shipmentService
        .addNewShipment(shipment)
        .subscribe(data => {
          this.submitErrors = '';
          this.dialogRef.close(shipment);
          this.initShippmentForm();
        },
          error => {
            this.submitErrors = error.error.message;
          },
        )

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
    this.submitErrors = '';
    this.shipmentForm = new FormGroup({
      parcelSKU: new FormControl('', [Validators.required]),
      streetAdress: new FormControl('', [Validators.required]),
      location: CountrySelectorComponent.locationFormInit(),
      description: new FormControl('', [Validators.required]),
      deliveryDate: new FormControl('', [Validators.required])
    }, { updateOn: 'submit' })
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
    return isValid;

  }

  validateParcelSKUInput(): boolean {
    const isValidParcelSKU = (this.shipmentForm.value.parcelSKU) ? true : false;
    return isValidParcelSKU;
  }
  validateDescriptionInput(): boolean {
    const isValidDescription = (this.shipmentForm.value.description) ? true : false;
    return isValidDescription;
  }
  validateAddressInput(): boolean {
    const isValidAddress = (this.shipmentForm.value.streetAdress) ? true : false;
    return isValidAddress;
  }
  validateCountryInput(): boolean {
    const isValidCountry = (this.shipmentForm.value.country) ? true : false;
    return isValidCountry;
  }
  validateStateInput(): boolean {
    const isValidState = (this.shipmentForm.value.state) ? true : false;
    return isValidState;
  }
  validateCityInput(): boolean {
    const isValidCity = (this.shipmentForm.value.city) ? true : false;
    return isValidCity;
  }
  validateDelieveryDateInput(): boolean {
    const isValidDate = (this.shipmentForm.value.deliveryDate) ? true : false;
    return isValidDate;
  }

}
