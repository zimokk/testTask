import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DetailsComponent} from "./details/details.component";


export const routes: Routes = [
  { path: 'shop/:id', component: DetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: DashboardComponent }
];
