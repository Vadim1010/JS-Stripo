import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DataDetailComponent } from './data-detail';

export const HomeRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'home/:id', component: DataDetailComponent
  }
];
