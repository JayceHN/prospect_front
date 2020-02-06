import { Component, OnInit } from '@angular/core';
import { RoadsService } from '../services/roads.service';

@Component({
  selector: 'app-roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.scss']
})
export class RoadsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'from', 'to', 'weight'];
  roads: Array<any>;
  constructor(private roadsService: RoadsService) { }

  ngOnInit() {
    this.roadsService.getRoads().subscribe(res=>{
      this.roads = res; 
    });

  }
}
