import { Injectable } from '@angular/core';
import { Trip } from "../models/trip";
import { Observable, of } from "rxjs";
import {Leg} from "../models/leg";
import {LegCrew} from "../models/leg-crew";
import {LegDetails} from "../models/leg-details";
import {LegPax} from "../models/leg-pax";
import {LegPrimary} from "../models/leg-primary";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private legPrimaryCalculationSubject = new Subject<LegPrimary>();

  constructor() { }

  getTrip(): Observable<Trip> {
    let trip = new Trip();
    trip.tripId = '135243623';
    trip.tail = '00245-S0';
    let legPrimary = new LegPrimary();
    legPrimary.arrivalDateTime = '06-04-2018';
    legPrimary.departureDateTime = '06-04-2018';
    legPrimary.arrivalFlight = 'KMCO';
    legPrimary.departureFlight = 'KRWI';
    legPrimary.ete = 'nada';
    let leg = new Leg();
    leg.legCrew = new LegCrew();
    leg.legDetails = new LegDetails();
    leg.legPax = new LegPax();
    leg.legPrimary = legPrimary;
    trip.legs = [];
    trip.legs.push(leg);

    return of(trip);
  }

  calculateLegPrimaryEte(legPrimary: LegPrimary) {
    legPrimary.ete = 'IM CALCULATED';
    this.legPrimaryCalculationSubject.next(legPrimary);
  }

  subscribeToLegPrimaryUpdates(): Observable<LegPrimary> {
    return this.legPrimaryCalculationSubject.asObservable();
  }
}
