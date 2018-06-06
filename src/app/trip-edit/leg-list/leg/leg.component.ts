import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Leg} from "../../../models/leg";
import {LegPrimary} from "../../../models/leg-primary";

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit, OnChanges {
  @Input() leg: Leg;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('On changes hit', changes);
  }

  legPrimaryUpdated(legPrimary: LegPrimary) {
    this.leg.legPrimary = legPrimary;
    //console.log('Leg Primary', this.leg.legPrimary);
  }


}
