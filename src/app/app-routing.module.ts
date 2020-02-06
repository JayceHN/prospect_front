import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RoadsComponent } from './roads/roads.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'home', component : HomeComponent},
  {path:'roads', component : RoadsComponent},
  {path:'cities', component : CitiesComponent},
  {path:'countries', component : CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
