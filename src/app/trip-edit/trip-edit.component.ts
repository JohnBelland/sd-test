import { Component, OnInit } from '@angular/core';
import { TripService } from "../providers/trip.service";
import { Leg } from "../models/leg";

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {
  legList: Leg[];
  showSavedData = false;
  savedData: string;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrip().subscribe(res => { this.legList = res.legs; console.log(res.legs); }) ;
  }

  saveForm() {
    this.showSavedData = true;
    this.savedData = JSON.stringify(this.legList);
  }
}
