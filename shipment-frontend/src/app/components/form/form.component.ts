import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Shipment } from '../shipment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @Output() shipmentForm!: FormGroup;
  @Output() submitEventEmitter = new EventEmitter<Shipment>();

  constructor(private fb: FormBuilder){ }

  submitInfo(): void{
    const newShipment: Shipment = this.shipmentForm.value;
    this.submitEventEmitter.emit(newShipment);
    this.initShippmentForm();
  }
  
  ngOnInit(): void {
    this.initShippmentForm();
  }

  initShippmentForm(){
    this.shipmentForm = this.fb.group({
      parcelSKU: '',
      streetAdress:'',
      country: '',
      town: '',
      description: '',
      deliveryDate: ''
    })
  }

}
