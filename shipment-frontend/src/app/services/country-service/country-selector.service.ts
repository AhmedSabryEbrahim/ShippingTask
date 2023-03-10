
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrySelectorService {

  url: string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";


  countries: any[] = [];

  constructor(private http: HttpClient) { }

  allCountries(): Observable<any> {
    return this.http.get(this.url);
  }

  getCities(countryId: number, stateId: number) {
    return this.countries[countryId].States[countryId].Cities;
  }

}