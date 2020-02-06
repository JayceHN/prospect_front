import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name'];
  cities: Array<any>;
  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.citiesService.getCities().subscribe(res=>{
      this.cities = res; 
    });
  }
}
