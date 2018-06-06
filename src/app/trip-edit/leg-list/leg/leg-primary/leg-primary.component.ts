import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LegPrimary} from "../../../../models/leg-primary";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TripService} from "../../../../providers/trip.service";

@Component({
  selector: 'app-leg-primary',
  templateUrl: './leg-primary.component.html',
  styleUrls: ['./leg-primary.component.css']
})
export class LegPrimaryComponent implements OnInit, OnChanges {
  @Input() legPrimary: LegPrimary;
  @Output() onLegPrimaryUpdated = new EventEmitter<LegPrimary>();
  legPrimaryFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private tripService: TripService) { }

  ngOnInit() {
    this.bindLegPrimaryFormGroup();

    this.tripService.subscribeToLegPrimaryUpdates().subscribe(res => {
      this.upadateLegPrimaryFormGroup(res);
      this.onLegPrimaryUpdated.emit(this.legPrimaryFormGroup.value);
    });

    this.legPrimaryFormGroup.controls['ete'].valueChanges.subscribe(change => console.log('I CHANGED!'));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('On changes hit', changes);
  }

  bindLegPrimaryFormGroup() {
    this.legPrimaryFormGroup = this.fb.group({
      departureFlight: this.legPrimary.departureFlight,
      arrivalFlight: this.legPrimary.arrivalFlight,
      departureDateTime: this.legPrimary.departureDateTime,
      arrivalDateTime: this.legPrimary.departureFlight,
      ete: this.legPrimary.ete,
      stars: 2
    });
  }

  upadateLegPrimaryFormGroup(legPrimary: LegPrimary) {
    //this.legPrimaryFormGroup.controls['ete'].setValue(legPrimary.ete, {onlySelf: true, emitEvent: false});

    //this.legPrimaryFormGroup.controls['ete'].setValue(legPrimary.ete);

    this.legPrimaryFormGroup.patchValue({
      arrivalDateTime: legPrimary.departureFlight,
      ete: legPrimary.ete
    }, { onlySelf: false, emitEvent: false });

  }

  onChange() {
    this.tripService.calculateLegPrimaryEte(this.legPrimaryFormGroup.value);
  }

  onSubmit() {
    console.log(JSON.stringify(this.legPrimaryFormGroup.value));
  }
}
