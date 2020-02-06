import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoadsService {
  roads: Array<any> = [
    { id: 1, from: "Bruges", to:"Ghent", name: "a1" , weight: 50},
    { id: 2, from: "Ghent", to:"Tournai", name: "a2" , weight: 80},
    { id: 3, from: "Tournai", to:"Brussels", name: "a3" , weight: 89},
    { id: 4, from: "Ghent", to:"Brussels", name: "a4" , weight: 56},
    { id: 5, from: "Ghent", to:"Antwerp", name: "a5" , weight: 60},
    { id: 6, from: "Antwerp", to:"Mechelen", name: "a6" , weight: 25},
    { id: 7, from: "Mechelen", to:"Brussels", name: "a7" , weight: 27},
    { id: 8, from: "Brussels", to:"Mons", name: "a8" , weight: 80},
    { id: 9, from: "Mons", to:"Namur", name: "a9" , weight: 91},
    { id: 10, from:"Mons", to:"Tournai", name: "a10" , weight: 51},
    { id: 11, from: "Namur", to:"Arlon", name: "a11" , weight: 129},
    { id: 12, from: "Arlon", to:"Liege", name: "a12" , weight: 123},
    { id: 13, from: "Liege", to:"Namur", name: "a13" , weight: 65},
    { id: 14, from: "Liege", to:"Brussels", name: "a14" , weight: 97}
  ];

  constructor() { }
  getRoads(){
    return of(this.roads); 
  }
  getRoad(id: number){
    return of(this.roads.find(x => x.id == id)); 
  }
  
}
