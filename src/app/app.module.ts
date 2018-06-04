import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { LegListComponent } from './trip-edit/leg-list/leg-list.component';
import { LegComponent } from './trip-edit/leg-list/leg/leg.component';
import { LegPrimaryComponent } from './trip-edit/leg-list/leg/leg-primary/leg-primary.component';
import { LegDetailsComponent } from './trip-edit/leg-list/leg/leg-details/leg-details.component';
import { LegCrewComponent } from './trip-edit/leg-list/leg/leg-crew/leg-crew.component';
import { LegPaxComponent } from './trip-edit/leg-list/leg/leg-pax/leg-pax.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TripEditComponent,
    LegListComponent,
    LegComponent,
    LegPrimaryComponent,
    LegDetailsComponent,
    LegCrewComponent,
    LegPaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
