import { Routes } from '@angular/router';
import { NoContentComponent, HomeRoutes } from './features';

export const ROUTES: Routes = [
  ...HomeRoutes,
  { path: '**',    component: NoContentComponent }
];
