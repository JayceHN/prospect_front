import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Array<any> = [
    { id: 1, name: 'Belgium', ISOCode : "BE" }
  ];

  constructor() { }
  getCountries(){
    return of(this.countries); 
  }
  getCountry(id: number){
    return of(this.countries.find(x => x.id == id)); 
  }
  
}
