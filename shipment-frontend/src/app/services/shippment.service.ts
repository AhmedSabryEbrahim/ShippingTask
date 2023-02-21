import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from '../components/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShippmentService {


  private readonly SHIPPMENT_API_URL = 'http://localhost:3000/shipments';

  constructor(private http: HttpClient) { }

  fetchAllShipments() : Observable<Shipment[]> {
    return this.http.get<Shipment[]>(this.SHIPPMENT_API_URL);
  }
}
