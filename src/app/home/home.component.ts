import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { RoadsService } from '../services/roads.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'from', 'to', 'name', 'weight'];
  roads: Array<any>;
  cities: Array<any>;
  form; 
  graph =[] ;
  durationInSeconds = 5;
  result; 

  constructor(private roadsService: RoadsService, 
    private citiesService: CitiesService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.citiesService.getCities().subscribe(res => {
      this.cities = res; 
    })

    this.form = this.formBuilder.group({
      from: '',
      to: ''
    });

    this.roadsService.getRoads().subscribe(res=>{
      this.roads = res; 
      
      //Testing algorithm
      let graph = []
      
      res.forEach(
        function (road){
          graph.push([road.from, road.to, road.weight])
        }
      )
      this.graph=graph;
  
    });


  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  dijkstra (edges,source,target) {
    const Q = new Set(),
          prev = {},
          dist = {},
          adj = {}
 
    const vertex_with_min_dist = (Q,dist) => {
        let min_distance = Infinity,
            u = null
 
        for (let v of Q) {
            if (dist[v] < min_distance) {
                min_distance = dist[v]
                u = v
            }
        }
        return u
    }
 
    for (let i=0;i<edges.length;i++) {
        let v1 = edges[i][0], 
            v2 = edges[i][1],
            len = edges[i][2]
 
        Q.add(v1)
        Q.add(v2)
 
        dist[v1] = Infinity
        dist[v2] = Infinity
 
        if (adj[v1] === undefined) adj[v1] = {}
        if (adj[v2] === undefined) adj[v2] = {}
 
        adj[v1][v2] = len
        adj[v2][v1] = len
    }
 
    dist[source] = 0
 
    while (Q.size) {
        let u = vertex_with_min_dist(Q,dist),
            neighbors = Object.keys(adj[u]).filter(v=>Q.has(v)) //Neighbor still in Q 
 
        Q.delete(u)
 
        if (u===target) break //Break when the target has been found
 
        for (let v of neighbors) {
            let alt = dist[u] + adj[u][v]
            if (alt < dist[v]) {
                dist[v] = alt
                prev[v] = u
            }
        }
    }
 
    {
        let u = target,
        S = [u],
        len = 0
 
        while (prev[u] !== undefined) {
            S.unshift(prev[u])
            len += adj[u][prev[u]]
            u = prev[u]
        }
        return [S,len]
    }   
}
 
onSubmit(customerData) {
  // Process checkout data here
  // todo err message if same cities 
  console.warn('Your order has been submitted', customerData);
  console.log(customerData);
  let [path,length] = this.dijkstra(this.graph, customerData.from, customerData.to);
  console.log(path) //[ 'a', 'c', 'f', 'e' ]
  console.log(length) //20
  this.result=length;

}

}
