import { Component, OnInit } from '@angular/core';
import { TripService } from "../providers/trip.service";
import {Trip} from "../models/trip";
import {Leg} from "../models/leg";

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {
  legList: Leg[];

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrip().subscribe(res => { this.legList = res.legs; console.log(res.legs); }) ;
  }

}
