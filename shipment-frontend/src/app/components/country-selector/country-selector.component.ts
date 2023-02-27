import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountrySelectorService } from 'src/app/services/country-service/country-selector.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {


  @Input()
  locationForm!: FormGroup;

  countryInfo: any[] = [];
  stateInfo: any[] = [];
  cityInfo: any[] = [];

  countryId: number = -1;
  stateId: number = -1;
  cityId: number = -1;

  @Output() public locationEventEmitter = new EventEmitter();
  constructor(private countryService: CountrySelectorService) { }

  ngOnInit() {
    this.getCountries();
    this.locationForm.valueChanges.subscribe((value) => {
      const result = {
        'country': this.countryInfo[value.country].CountryName,
        'state': (value.state)? this.stateInfo[value.state].StateName : '',
        'city': (value.city)? this.cityInfo[value.city] : '',
      }
      this.locationEventEmitter.emit(result);
    });
  }

  getCountries() {
    this.countryService.allCountries().subscribe(
      (data2) => {
        this.countryInfo = data2.Countries;
      },
      err => console.log(err),
      () => console.log('complete')
    );
  }

  onChangeCountry($event: any) {
    this.countryId = $event.value;
    if (this.countryId) {
      this.stateInfo = this.countryInfo[this.countryId].States;
    }
  }


  onChangeState($event: any) {
    this.stateId = $event.value;
    if (this.stateId) {
      this.cityInfo = this.stateInfo[this.stateId].Cities;
    }
  }


  onChangeCity($event: any) {
    this.cityId = $event.value;
    if (this.cityId) {
      this.cityInfo = this.cityInfo[this.cityId];
    }
  }

  static locationFormInit(): FormGroup {
    return new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
  }


}