import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TripEditComponent} from "./trip-edit/trip-edit.component";

const routes: Routes = [
  { path: 'tripedit', component: TripEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
