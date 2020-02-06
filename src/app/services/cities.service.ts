import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  cities: Array<any> = [
    { id: 1, name: 'Bruges'},
    { id: 2, name: 'Antwerp'},
    { id: 3, name: 'Ghent'},
    { id: 4, name: 'Mechelen'},
    { id: 5, name: 'Brussels'},
    { id: 6, name: 'Mons'},
    { id: 7, name: 'Namur'},
    { id: 8, name: 'Liege'},
    { id: 9, name: 'Arlon'},
    { id: 10, name: 'Tournai'}
  ];

  constructor() { }
  getCities(){
    return of(this.cities); 
  }
  getCity(id: number){
    return of(this.cities.find(x => x.id == id)); 
  }
  
}
