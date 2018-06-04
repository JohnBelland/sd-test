import {Component, Input, OnInit} from '@angular/core';
import {LegPrimary} from "../../../../models/leg-primary";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TripService} from "../../../../providers/trip.service";

@Component({
  selector: 'app-leg-primary',
  templateUrl: './leg-primary.component.html',
  styleUrls: ['./leg-primary.component.css']
})
export class LegPrimaryComponent implements OnInit {
  @Input() legPrimary: LegPrimary;
  legPrimaryFormGroup: FormGroup;
  result: string;

  constructor(private fb: FormBuilder, private tripService: TripService) { }

  ngOnInit() {
    this.bindLegPrimaryFormGroup();

    this.tripService.subscribeToLegPrimaryUpdates().subscribe(res => {
      this.result = JSON.stringify(res);
      this.legPrimary = res;
      // this.bindLegPrimaryFormGroup();  //CAN BE CALLED TO UPDATE ENTIRE FORM
      this.upadateLegPrimaryFormGroup(res);
    });
  }

  bindLegPrimaryFormGroup() {
    this.legPrimaryFormGroup = this.fb.group({
      departureFlight: this.legPrimary.departureFlight,
      arrivalFlight: this.legPrimary.arrivalFlight,
      departureDateTime: this.legPrimary.departureDateTime,
      arrivalDateTime: this.legPrimary.departureFlight,
      ete: this.legPrimary.ete
    });
  }

  //NOTE WE CAN USE THIS TO UPDATE JUST A SUBSET OF THE FORM IF WE WANTED
  upadateLegPrimaryFormGroup(legPrimary: LegPrimary) {
    this.legPrimaryFormGroup.patchValue({
      arrivalDateTime: legPrimary.departureFlight,
      ete: legPrimary.ete
    });
  }

  onChange() {
    console.log('On change hit');
    this.tripService.calculateLegPrimaryEte(this.legPrimaryFormGroup.value);
  }
}
